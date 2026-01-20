
// Initialize Map
// Zoom level 5 for India overview
const map = L.map('map').setView([22.5937, 78.9629], 5);

// Add Tile Layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

// State Variables
let geoJsonLayer;
let currentYearMonth = "";
let currentAgeGroup = "age_0_5";

// Normalization Map for District Names
// This needs to be robust for India
const districtAliases = {
    "ahmadabad": "ahmedabad",
    "ahmed nagar": "ahmednagar",
    "ahilyanagar": "ahmednagar", // Recent rename
    "bengaluru": "bangalore",
    "bengaluru urban": "bangalore",
    "bengaluru rural": "bangalore rural",
    "belgaum": "belagavi",
    "bellary": "ballari",
    "bijapur": "vijayapura", // Karnataka
    "chikkamagaluru": "chikmagalur",
    "kalaburagi": "gulbarga",
    "mysuru": "mysore",
    "shivamogga": "shimoga",
    "thiruvananthapuram": "trivandrum",
    "koch Bihar": "cooch behar",
    "darjiling": "darjeeling",
    "hugli": "hooghly",
    "howrah": "haora",
    "malda": "maldah",
    "purba bardhaman": "bardhaman", // Approximate
    "paschim bardhaman": "bardhaman",
    "north 24 parganas": "24 paraganas north",
    "south 24 parganas": "24 paraganas south",
    "sant ravidas nagar": "bhadohi",
    "allahabad": "prayagraj",
    "faizabad": "ayodhya",
    "jyotiba phule nagar": "amroha",
    "kanshiram nagar": "kasganj",
    "mahamsya nagar": "hathras",
    "panch mahals": "panchmahal",
    "sabarkantha": "sabar kantha",
    "the dangs": "dang",
    "banaskantha": "banas kantha",
    "kheri": "lakhimpur kheri",
    "sri ganganagar": "ganganagar",
    "jhunjhunu": "jhunjhunun",
    "jalore": "jalor",
    "chittaurgarh": "chittorgarh",
    "dhaulpur": "dholpur",
    "gurgaon": "gurugram",
    "mewat": "nuh",
    "y.s.r.": "kadapa",
    "sri potti sriramulu nellore": "nellore",
    "visakhapatnam": "vishakhapatnam"
};

function normalizeName(name) {
    if (!name) return "";
    let clean = name.toLowerCase().trim();
    return districtAliases[clean] || clean;
}

// Process Data
const processData = () => {
    const months = new Set();
    const dataMap = {}; // Key: "normalized_district|Month|Year" -> { count, ... }

    enrollmentData.forEach(row => {
        // Create a sortable date string for the dropdown mainly
        const monthYear = `${row.Month_Name} ${row.Year}`;
        months.add(monthYear);

        let distName = normalizeName(row.district);
        // Special case: We should try to append state if possible, but the GeoJSON 
        // usually just has district names. 
        // For accurate mapping, we rely on the implementation plan's "fuzzy" strategy 
        // where we heavily rely on the district name being unique enough or 
        // accepting that "Aurangabad" might highlight both in MH and BR (if GeoJSON doesn't distinguish).

        // HOWEVER, we can do better if we check features. 
        // Let's store data by State|District if we can.
        // But for now, simple district keying is safer with generic GeoJSONs.

        const key = `${distName}|${monthYear}`;

        if (!dataMap[key]) {
            dataMap[key] = {
                age_0_5: 0,
                age_5_17: 0,
                age_18_greater: 0,
                state: row.state,
                originalName: row.district
            };
        }

        // Accumulate
        dataMap[key].age_0_5 += parseInt(row.age_0_5) || 0;
        dataMap[key].age_5_17 += parseInt(row.age_5_17) || 0;
        dataMap[key].age_18_greater += parseInt(row.age_18_greater) || 0;
    });

    // Populate Select
    const monthSelect = document.getElementById('monthSelect');
    const sortedMonths = Array.from(months).sort((a, b) => {
        const dateA = new Date(a);
        const dateB = new Date(b);
        return dateB - dateA;
    });

    sortedMonths.forEach(m => {
        const option = document.createElement('option');
        option.value = m;
        option.textContent = m;
        monthSelect.appendChild(option);
    });

    if (sortedMonths.length > 0) {
        currentYearMonth = sortedMonths[0];
        monthSelect.value = currentYearMonth;
    }

    return dataMap;
};

const fullDataMap = processData();

// Color Scale
function getColor(d, min, max) {
    if (d === undefined || d === null) return '#1a1a1a'; // Dark grey for no data, lighter than background

    if (max === 0) return '#FFEDA0';

    // Logarithmic scale often looks better for population/enrollment data
    // but linear is easier to understand. Let's stick to linear with steps.

    const ratio = (d - min) / (max - min);

    // Custom steps for better visualization
    return d > max * 0.9 ? '#800026' :
        d > max * 0.7 ? '#BD0026' :
            d > max * 0.5 ? '#E31A1C' :
                d > max * 0.3 ? '#FC4E2A' :
                    d > max * 0.15 ? '#FD8D3C' :
                        d > max * 0.05 ? '#FEB24C' :
                            d > 0 ? '#FFEDA0' :
                                '#1a1a1a';
}

function style(feature) {
    // Try to match district name
    // GeoJSON properties vary. Common ones: dtname, DISTRICT, dist_name
    const props = feature.properties;
    const geoDistName = props.dtname || props.DISTRICT || props.dist_name || props.NAME_2 || "";

    const distName = normalizeName(geoDistName);
    const key = `${distName}|${currentYearMonth}`;
    const data = fullDataMap[key];
    const val = data ? data[currentAgeGroup] : 0;

    return {
        fillColor: getColor(val, currentMin, currentMax),
        weight: 0.5, // Thinner lines for whole India
        opacity: 1,
        color: 'rgba(255,255,255,0.2)',
        dashArray: '',
        fillOpacity: 0.7
    };
}

let currentMin = 0;
let currentMax = 100;

function updateMap() {
    // 1. Calculate Stats
    let values = [];
    // We only care about data that matches the current month
    const distKeys = Object.keys(fullDataMap).filter(k => k.endsWith(`|${currentYearMonth}`));
    distKeys.forEach(k => {
        values.push(fullDataMap[k][currentAgeGroup]);
    });

    if (values.length > 0) {
        currentMin = Math.min(...values);
        currentMax = Math.max(...values);
        // Avoid 0 max
        if (currentMax === 0) currentMax = 100;
    } else {
        currentMin = 0;
        currentMax = 100;
    }

    // Stats
    const metricsDiv = document.getElementById('stats');
    metricsDiv.innerHTML = `
        <div style="display:flex; justify-content:space-between; flex-direction:column; gap:5px;">
            <span><strong>Max Enrollment:</strong> ${currentMax.toLocaleString()}</span>
            <span><strong>District Count:</strong> ${distKeys.length}</span>
            <small style="opacity:0.6; margin-top:5px;">${currentYearMonth}</small>
        </div>
    `;

    // 2. Refresh Layer
    if (geoJsonLayer) {
        map.removeLayer(geoJsonLayer);
    }

    // Checking if indiaGeo is loaded
    if (typeof indiaGeo === 'undefined') {
        console.error("India GeoJSON not loaded!");
        return;
    }

    geoJsonLayer = L.geoJSON(indiaGeo, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);

    updateLegend();
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 2,
        color: '#fff',
        fillOpacity: 0.9
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    geoJsonLayer.resetStyle(e.target);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight
    });

    const props = feature.properties;
    const geoDistName = props.dtname || props.DISTRICT || props.dist_name || props.NAME_2 || "Unknown";
    const distName = normalizeName(geoDistName);

    const key = `${distName}|${currentYearMonth}`;
    const data = fullDataMap[key];
    const val = data ? data[currentAgeGroup] : 0;

    // State lookup if possible from GeoJSON, else from data
    const stateName = (data && data.state) ? data.state : (props.stname || props.ST_NM || "");

    const tooltipContent = `
        <div class="custom-tooltip-content">
            <h3 style="margin:0; font-size:1rem; border-bottom:1px solid rgba(255,255,255,0.2); padding-bottom:5px;">${geoDistName}</h3>
            <span style="font-size:0.8rem; color:#aaa;">${stateName}</span>
            <p style="margin:8px 0 0 0; font-size:1.1rem; font-weight:bold;">${val.toLocaleString()}</p>
            <p style="margin:0; font-size:0.8em; opacity:0.7;">Enrollments</p>
        </div>
    `;

    layer.bindTooltip(tooltipContent, {
        className: 'custom-tooltip',
        sticky: true,
        direction: 'top'
    });
}

function updateLegend() {
    const legend = document.getElementById('legend');
    legend.style.display = 'flex';
    legend.innerHTML = `
        <strong>${currentAgeGroup.replace(/_/g, ' ')}</strong>
        <div class="legend-gradient" style="background: linear-gradient(to right, #FFEDA0, #800026);"></div>
        <div class="legend-labels">
            <span>0</span>
            <span>${Math.round(currentMax / 2).toLocaleString()}</span>
            <span>${currentMax.toLocaleString()}</span>
        </div>
    `;
}

// Event Listeners
document.getElementById('monthSelect').addEventListener('change', (e) => {
    currentYearMonth = e.target.value;
    updateMap();
});

document.getElementById('ageSelect').addEventListener('change', (e) => {
    currentAgeGroup = e.target.value;
    updateMap();
});

// Initial Load
updateMap();
