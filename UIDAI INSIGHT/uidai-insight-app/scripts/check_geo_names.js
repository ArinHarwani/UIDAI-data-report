import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const geoPath = path.resolve(__dirname, '../../standalone_map/geo.js');

try {
    const content = fs.readFileSync(geoPath, 'utf8');
    // content is "window.indiaGeo = { ... };"
    // We need to extract the JSON part.
    const jsonStr = content.substring(content.indexOf('{'), content.lastIndexOf(';') > 0 ? content.lastIndexOf(';') : content.length);
    const geo = JSON.parse(jsonStr);

    const states = new Set();
    geo.features.forEach(f => {
        const p = f.properties;
        const name = p.st_nm || p.NAME_1 || p.state;
        if (name) states.add(name);
    });

    console.log("States in GeoJSON:", Array.from(states).sort());
} catch (e) {
    console.error(e);
}
