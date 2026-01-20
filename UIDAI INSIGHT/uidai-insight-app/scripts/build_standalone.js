import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appDir = path.resolve(__dirname, '../');
const standaloneDir = path.resolve(__dirname, '../../standalone_map');

// Input paths
const dataPath = path.join(appDir, 'src/data/enrollment_data.json');
const geoPath = path.join(appDir, 'public/india_district.geojson');

// Output paths
const outDataPath = path.join(standaloneDir, 'data.js');
const outGeoPath = path.join(standaloneDir, 'geo.js');

if (!fs.existsSync(standaloneDir)) {
    fs.mkdirSync(standaloneDir, { recursive: true });
}

console.log("Building standalone files...");

// 1. Convert Enrollment Data
try {
    const rawData = fs.readFileSync(dataPath, 'utf8');
    const scriptContent = `window.enrollmentData = ${rawData};`;
    fs.writeFileSync(outDataPath, scriptContent);
    console.log(`Created ${outDataPath}`);
} catch (e) {
    console.error("Error processing enrollment data:", e);
}

// 2. Convert GeoJSON
try {
    const rawGeo = fs.readFileSync(geoPath, 'utf8');
    const scriptContent = `window.indiaGeo = ${rawGeo};`;
    fs.writeFileSync(outGeoPath, scriptContent);
    console.log(`Created ${outGeoPath}`);
} catch (e) {
    console.error("Error processing GeoJSON:", e);
}

console.log("Done.");
