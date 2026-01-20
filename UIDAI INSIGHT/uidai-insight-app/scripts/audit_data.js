import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.resolve(__dirname, '../src/data/enrollment_data.json');
const geoPath = path.resolve(__dirname, '../../standalone_map/geo.js');

const enrollmentData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Parse GeoJSON from the JS file wrapper
const geoContent = fs.readFileSync(geoPath, 'utf8');
const geoJsonStr = geoContent.substring(geoContent.indexOf('{'), geoContent.lastIndexOf(';') > 0 ? geoContent.lastIndexOf(';') : geoContent.length);
const geoData = JSON.parse(geoJsonStr);

const missingDistricts = [];
const missingPercentage = [];

// Helper from frontend
function cleanName(name) {
    if (!name) return "";
    return name.toLowerCase()
        .replace(/district/g, '')
        .replace(/[^a-z0-9]/g, '')
        .trim();
}

console.log("--- DATA AUDIT ---");

// 1. Check for Missing Percentages
Object.keys(enrollmentData).forEach(state => {
    const districts = enrollmentData[state];
    let zeroCount = 0;
    let totalCount = 0;
    Object.keys(districts).forEach(d => {
        totalCount++;
        if (!districts[d].percentage) zeroCount++;
    });

    if (zeroCount > 0) {
        console.log(`[DATA ISSUE] ${state}: ${zeroCount}/${totalCount} districts have 0% or missing percentage.`);
        if (zeroCount === totalCount) missingPercentage.push(state);
    }
});

// 2. Check GeoJSON Mismatches
geoData.features.forEach(feature => {
    const p = feature.properties;
    const stateName = p.st_nm || p.NAME_1 || p.state;
    const districtName = p.district || p.NAME_2 || p.dtname;

    if (!stateName || !districtName) return;

    // Try to find state
    let stateKey = Object.keys(enrollmentData).find(k => k.toLowerCase() === stateName.toLowerCase());
    if (!stateKey) {
        stateKey = Object.keys(enrollmentData).find(k => cleanName(k) === cleanName(stateName));
    }

    if (!stateKey) {
        // Console log only once per missing state to avoid spam
        if (!missingDistricts.includes(`State: ${stateName}`)) {
            missingDistricts.push(`State: ${stateName}`);
        }
        return;
    }

    // Try to find district
    const stateData = enrollmentData[stateKey];
    let districtKey = Object.keys(stateData).find(k => k.toLowerCase() === districtName.toLowerCase());

    if (!districtKey) {
        districtKey = Object.keys(stateData).find(k => cleanName(k) === cleanName(districtName));
    }

    if (!districtKey) {
        // Try fuzzy check used in frontend
        districtKey = Object.keys(stateData).find(k => cleanName(k).includes(cleanName(districtName)) || cleanName(districtName).includes(cleanName(k)));
    }

    if (!districtKey) {
        // Collect sample mismatches
        // console.log(`[MISMATCH] ${stateName} -> ${districtName} (Available: ${Object.keys(stateData).slice(0,3).join(', ')}...)`);
    } else {
        // It matches!
    }
});

console.log("\n--- STATES WITH 100% MISSING PERCENTAGE ---");
console.log(missingPercentage.join(', '));
