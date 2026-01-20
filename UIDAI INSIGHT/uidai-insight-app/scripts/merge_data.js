import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvDirectory = path.resolve(__dirname, '../../');
const dataDirectory = path.resolve(__dirname, '../src/data');
const outputFile = path.join(dataDirectory, 'enrollment_data.json');

if (!fs.existsSync(dataDirectory)) {
    fs.mkdirSync(dataDirectory, { recursive: true });
}

const STATE_MAPPINGS = {
    "Andaman and Nicobar Islands": "Andaman and Nicobar",
    "Odisha": "Orissa",
    "Uttarakhand": "Uttaranchal",
    "Dadra and Nagar Haveli and Daman and Diu": "Dadra and Nagar Haveli"
};

const enrollmentData = {};
let fileCount = 0;

try {
    const files = fs.readdirSync(csvDirectory);

    files.forEach(file => {
        let shouldProcess = false;

        // Process standard files but SKIP the bad Rajasthan one
        if (file.endsWith('_District_Demographics.csv')) {
            if (file === 'Rajasthan_District_Demographics.csv') {
                console.log("Skipping incomplete file: " + file);
                shouldProcess = false;
            } else {
                shouldProcess = true;
            }
        }

        // Explicitly include the new Rajasthan file
        if (file === 'RAJASTHAN PERCENATGE.csv') {
            shouldProcess = true;
        }

        if (shouldProcess) {
            try {
                const filePath = path.join(csvDirectory, file);
                const fileContent = fs.readFileSync(filePath, 'utf8');

                const records = parse(fileContent, {
                    columns: true,
                    skip_empty_lines: true,
                    trim: true,
                    bom: true
                });

                let lastStateName = "Unknown"; // For logging

                records.forEach(record => {
                    const keys = Object.keys(record);
                    const stateKey = keys.find(k => k.match(/state/i));
                    const districtKey = keys.find(k => k.match(/district/i));
                    const totalKey = keys.find(k => k.match(/total/i));
                    const percentageKey = keys.find(k => k.match(/percentage/i) || k.includes('%'));

                    if (!stateKey || !districtKey) return;

                    let stateName = record[stateKey];
                    // Normalize State Name
                    if (STATE_MAPPINGS[stateName]) {
                        stateName = STATE_MAPPINGS[stateName];
                    }
                    lastStateName = stateName;

                    const district = record[districtKey];

                    let total = 0;
                    if (totalKey && record[totalKey]) {
                        total = parseInt(record[totalKey].replace(/,/g, ''), 10) || 0;
                    }

                    let percentage = 0;
                    if (percentageKey && record[percentageKey]) {
                        percentage = parseFloat(record[percentageKey].replace('%', '')) || 0;
                    }

                    if (!enrollmentData[stateName]) {
                        enrollmentData[stateName] = {};
                    }

                    enrollmentData[stateName][district] = {
                        total: total,
                        percentage: percentage
                    };
                });

                fileCount++;
                console.log(`Processed: ${file} (State: ${lastStateName})`);
            } catch (err) {
                console.error(`Error processing file ${file}:`, err.message);
            }
        }
    });

    fs.writeFileSync(outputFile, JSON.stringify(enrollmentData, null, 2));
    console.log(`\nVerified Processing. Output: ${outputFile}`);

} catch (err) {
    console.error('Fatal error:', err);
}
