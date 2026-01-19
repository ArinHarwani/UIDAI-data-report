
// Initialize Map
const map = L.map('map').setView([22.5937, 78.9629], 5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

// Normalization for State Names
function normalizeState(name) {
    if (!name) return "";
    let clean = name.toLowerCase().trim();

    // Fix GeoJSON specific quirks (NAME_1 values)
    if (clean === "andaman and nicobar") return "andaman & nicobar islands";
    if (clean === "uttaranchal") return "uttarakhand";
    if (clean === "orissa") return "odisha";
    if (clean === "pondicherry") return "puducherry";

    // Standardize
    clean = clean.replace(/&/g, 'and');
    if (clean === "jammu and kashmir") return "jammu & kashmir"; // Data uses "&"
    if (clean === "dadra and nagar haveli") return "dadra & nagar haveli";
    if (clean === "daman and diu") return "daman & diu";

    return clean;
}

// Prepare Data Lookup
const mpiLookup = {};
Object.keys(mpiData).forEach(k => {
    mpiLookup[k] = mpiData[k];

    // Double mapping for safety (both & and and)
    if (k.includes('&')) {
        mpiLookup[k.replace('&', 'and')] = mpiData[k];
    }
});

// Calculate Stats
const values = Object.values(mpiData).filter(v => v > 0);
const maxMPI = Math.max(...values);
const minMPI = Math.min(...values);

// Color Scale: Continuous Gradient
function interpolateColor(color1, color2, factor) {
    if (arguments.length < 3) {
        factor = 0.5;
    }
    var result = result || { r: 0, g: 0, b: 0 };
    var c1 = hexToRgb(color1);
    var c2 = hexToRgb(color2);

    result.r = Math.round(c1.r + factor * (c2.r - c1.r));
    result.g = Math.round(c1.g + factor * (c2.g - c1.g));
    result.b = Math.round(c1.b + factor * (c2.b - c1.b));
    return `rgb(${result.r}, ${result.g}, ${result.b})`;
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function getColor(d) {
    if (d === undefined || d === null) return 'rgba(0,0,0,0)';

    // Premium Red-Yellow-Green Scale (Reversed for Poverty: Low=Green/Good, High=Red/Bad)
    // Designed to make MP(6.81) vs Raj(11.14) very distinct

    const stops = [
        { val: 0, color: '#006837' },   // Deep Green (Best)
        { val: 6, color: '#66bd63' },   // Green (MP ~6.8 will be Green-Yellow mix)
        { val: 10, color: '#fee08b' },   // Pale Yellow (Transition)
        { val: 14, color: '#f46d43' },   // Orange (Raj ~11.1 will be Orange-Yellow mix)
        { val: 25, color: '#d73027' },   // Red
        { val: 45, color: '#a50026' }    // Dark Red (Worst)
    ];

    // Find segment
    for (let i = 0; i < stops.length - 1; i++) {
        if (d >= stops[i].val && d <= stops[i + 1].val) {
            const range = stops[i + 1].val - stops[i].val;
            const factor = (d - stops[i].val) / range;
            return interpolateColor(stops[i].color, stops[i + 1].color, factor);
        }
    }

    // Cap at max
    if (d > stops[stops.length - 1].val) return stops[stops.length - 1].color;

    return '#333';
}

function style(feature) {
    const props = feature.properties;
    // State GeoJSON usually has NAME_1 or NAME for state
    const stateNameRaw = props.NAME_1 || props.NAME || props.stname || props.ST_NM || "";
    let stateName = normalizeState(stateNameRaw);

    let val = mpiLookup[stateName];

    if (val === undefined) {
        if (stateName.includes('and')) val = mpiLookup[stateName.replace('and', '&')];
        else if (stateName.includes('&')) val = mpiLookup[stateName.replace('&', 'and')];
    }

    return {
        fillColor: getColor(val),
        weight: 1,              // Show borders now!
        opacity: 1,
        color: 'white',         // White state borders
        dashArray: '3',
        fillOpacity: 1
    };
}

function highlightFeature(e) {
    var layer = e.target;
    // On hover, add a thin border to highlight just that state/district part without breaking seamless look too much
    layer.setStyle({
        fillOpacity: 0.8
    });
}

function resetHighlight(e) {
    const layer = e.target;
    // We compute style again instead of resetStyle to ensure it matches current state logic
    const defaultStyle = style(layer.feature);
    layer.setStyle(defaultStyle);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight
    });

    const props = feature.properties;
    const stateNameRaw = props.NAME_1 || props.NAME || props.stname || props.ST_NM || "Unknown State";
    const stateName = normalizeState(stateNameRaw);

    let val = mpiLookup[stateName];
    if (val === undefined) {
        if (stateName.includes('and')) val = mpiLookup[stateName.replace('and', '&')];
        else if (stateName.includes('&')) val = mpiLookup[stateName.replace('&', 'and')];
    }

    if (val === undefined) val = "N/A";

    const tooltipContent = `
        <div class="custom-tooltip-content">
            <h3 style="margin:0; font-size:1rem; border-bottom:1px solid rgba(255,255,255,0.2); padding-bottom:5px;">${stateNameRaw}</h3>
            <p style="margin:5px 0 0 0;">MPI Score: <strong>${val}</strong></p>
        </div>
    `;

    layer.bindTooltip(tooltipContent, {
        className: 'custom-tooltip',
        sticky: true
    });
}

// Add Layer
if (typeof indiaStatesGeo !== 'undefined') {
    L.geoJSON(indiaStatesGeo, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);
} else {
    // Fallback or explicit error
    alert("State Map data not loaded. Please check india_states_geo.js");
}

// Update Legend
const legend = document.getElementById('legend');
legend.style.display = 'flex';
legend.innerHTML = `
    <strong>MPI Score</strong>
    <!-- Green to Red Gradient -->
    <div class="legend-gradient" style="background: linear-gradient(to right, #006837, #66bd63, #fee08b, #f46d43, #d73027); width:100%; height:12px;"></div>
    <div class="legend-labels">
        <span>0 (Good)</span>
        <span>25+ (Bad)</span>
    </div>
    <div style="margin-top:5px; font-size:0.75em; color:#ddd; line-height:1.4;">
        <span style="color:#66bd63">■</span> Low Poverty<br>
        <span style="color:#f46d43">■</span> High Poverty
    </div>
`;
