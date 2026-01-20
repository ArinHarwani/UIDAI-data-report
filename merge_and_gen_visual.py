import csv
import json

def normalize(name):
    # Standardize state names for matching
    name = name.upper().strip()
    name = name.replace('AND', '&')
    name = name.replace('PUDUCHERRY', 'PONDICHERRY') # Match specific variation if needed
    # Inverse map if needed.
    # CSV 1 (Pop): PUDUCHERRY
    # CSV 2 (Aadhaar): Pondicherry
    # Let's handle this carefully.
    
    # Common mappings
    if "NCT OF DELHI" in name: return "DELHI"
    if "DADRA" in name and "NAGAR" in name: return "DADRA & NAGAR HAVELI" # Simplify for match?
    # CSV 2 has explicit "Dadra and Nagar Haveli and Daman and Diu"
    
    return name

def main():
    pop_file = "projected_population_shares_2025.csv"
    aadhar_file = "FINAL URBAN RURAL.csv"
    
    pop_data = {} # State -> {Urban_Pop, Rural_Pop}
    with open(pop_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            norm_name = normalize(row['State'])
            pop_data[norm_name] = {
                'urban_pop': float(row['Urban_Person']),
                'rural_pop': float(row['Rural_Person'])
            }
            
    aadhar_data = {} # State -> {Urban_Act, Rural_Act}
    with open(aadhar_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            norm_name = normalize(row['State'])
            # Handle complex DNH
            if "DADRA" in norm_name and "DAMAN" in norm_name:
                 # CSV1 has separate DNH and DAMAN. CSV2 merged.
                 # Skip for now or map to one?
                 norm_name = "DADRA & NAGAR HAVELI" 
                 
            try:
                aadhar_data[norm_name] = {
                    'urban_act': float(row['Urban Activity %']),
                    'rural_act': float(row['Rural Activity %'])
                }
            except ValueError:
                continue

    # Merge
    merged = []
    
    # Iterate through one list to find common
    all_states = set(pop_data.keys()).union(set(aadhar_data.keys()))
    
    for state in all_states:
        if state in pop_data and state in aadhar_data:
            merged.append({
                'state': state.title(), # Display friendly
                'urban_pop': pop_data[state]['urban_pop'],
                'rural_pop': pop_data[state]['rural_pop'],
                'urban_act': aadhar_data[state]['urban_act'],
                'rural_act': aadhar_data[state]['rural_act']
            })
        else:
            # Try fuzzy match?
            # PONDICHERRY vs PUDUCHERRY
            # ODISHA vs ORRISSA? (Check CSVs) = ODISHA matches.
            # JAMMU & KASHMIR matches.
            pass
            
            # Special case linking
            if state == "PONDICHERRY" and "PUDUCHERRY" in pop_data:
                 # Map
                 pass

    # Sort by Gap (Urban Act - Urban Pop)
    merged.sort(key=lambda x: abs(x['urban_act'] - x['urban_pop']), reverse=True)

    # Generate HTML
    html_content = create_html(merged)
    
    with open('urban_rural_comparison.html', 'w', encoding='utf-8') as f:
        f.write(html_content)
        
    print(f"Generated urban_rural_comparison.html with {len(merged)} states.")

def create_html(data):
    json_data = json.dumps(data)
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Urbar vs Rural: Population Projection vs Aadhaar Activity (2025)</title>
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {{
            --bg-color: #0f172a;
            --card-bg: #1e293b;
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
            --proj-color: #38bdf8; /* Sky 400 */
            --act-color: #f472b6;  /* Pink 400 */
            --connector: #475569;
        }}

        body {{
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-primary);
            margin: 0;
            padding: 40px;
            display: flex;
            justify-content: center;
        }}

        .container {{
            width: 100%;
            max-width: 1200px;
            background-color: var(--card-bg);
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            padding: 40px;
        }}

        h1 {{
            font-size: 2rem;
            margin-bottom: 5px;
            background: linear-gradient(90deg, #fff, #cbd5e1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }}
        
        .subtitle {{
            color: var(--text-secondary);
            margin-bottom: 40px;
        }}

        .legend {{
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
            justify-content: flex-end;
        }}

        .legend-item {{
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
        }}

        .dot {{ width: 12px; height: 12px; border-radius: 50%; }}

        /* Chart */
        .row {{
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            position: relative;
            height: 40px;
        }}

        .label {{
            width: 180px;
            font-size: 0.9rem;
            color: var(--text-secondary);
        }}

        .chart-area {{
            flex-grow: 1;
            position: relative;
            height: 100%;
            border-left: 1px solid rgba(255,255,255,0.1);
        }}

        .connector-line {{
            position: absolute;
            top: 50%;
            height: 2px;
            background: var(--connector);
            transform: translateY(-50%);
            opacity: 0.5;
        }}

        .marker {{
            position: absolute;
            top: 50%;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.3s;
            cursor: pointer;
        }}
        
        .marker:hover {{
            transform: translate(-50%, -50%) scale(1.5);
            z-index: 10;
        }}

        .proj-marker {{ background: var(--proj-color); box-shadow: 0 0 10px rgba(56, 189, 248, 0.5); }}
        .act-marker {{ background: var(--act-color); box-shadow: 0 0 10px rgba(244, 114, 182, 0.5); }}

        /* Tooltip */
        #tooltip {{
            position: absolute;
            background: rgba(15, 23, 42, 0.95);
            border: 1px solid rgba(255,255,255,0.1);
            padding: 10px;
            border-radius: 8px;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.2s;
            font-size: 0.85rem;
            box-shadow: 0 4px 10px rgba(0,0,0,0.5);
            z-index: 100;
        }}

        .grid-line {{
            position: absolute;
            top: 0; bottom: 0;
            width: 1px;
            background: rgba(255,255,255,0.05);
        }}
        
        .grid-label {{
            position: absolute;
            bottom: -20px;
            transform: translateX(-50%);
            font-size: 0.75rem;
            color: var(--connector);
        }}

    </style>
</head>
<body>

<div class="container">
    <h1>Projected Demographics vs. Digital Reality (2025)</h1>
    <div class="subtitle">Comparing Urban Population Percentage (Projected) with Actual Aadhaar Urban Activity.</div>

    <div class="legend">
        <div class="legend-item">
            <div class="dot" style="background: var(--proj-color)"></div>
            <span>Projected Urban Pop %</span>
        </div>
        <div class="legend-item">
            <div class="dot" style="background: var(--act-color)"></div>
            <span>Actual Aadhaar Urban Activity %</span>
        </div>
    </div>

    <div id="chart"></div>
</div>
<div id="tooltip"></div>

<script>
    const data = {json_data};

    const chart = document.getElementById('chart');
    const tooltip = document.getElementById('tooltip');

    data.forEach(d => {{
        const row = document.createElement('div');
        row.className = 'row';

        const label = document.createElement('div');
        label.className = 'label';
        label.textContent = d.state;
        row.appendChild(label);

        const area = document.createElement('div');
        area.className = 'chart-area';

        // Draw scale
        // 0 to 100%
        
        const p1 = d.urban_pop;
        const p2 = d.urban_act;
        
        const minP = Math.min(p1, p2);
        const maxP = Math.max(p1, p2);
        const width = maxP - minP;

        // Connector
        const line = document.createElement('div');
        line.className = 'connector-line';
        line.style.left = minP + '%';
        line.style.width = width + '%';
        // Color line based on divergence?
        // If Act > Proj -> Pinkish
        // If Proj > Act -> Blueish
        line.style.background = (p2 > p1) ? 'linear-gradient(90deg, var(--proj-color), var(--act-color))' : 'linear-gradient(90deg, var(--act-color), var(--proj-color))';
        
        area.appendChild(line);

        // Marker 1 (Proj)
        const m1 = document.createElement('div');
        m1.className = 'marker proj-marker';
        m1.style.left = p1 + '%';
        m1.onmousemove = (e) => showTooltip(e, `Projected Urban Pop: ${{p1.toFixed(1)}}%`);
        m1.onmouseleave = hideTooltip;
        area.appendChild(m1);

        // Marker 2 (Act)
        const m2 = document.createElement('div');
        m2.className = 'marker act-marker';
        m2.style.left = p2 + '%';
        m2.onmousemove = (e) => showTooltip(e, `Aadhaar Urban Activity: ${{p2.toFixed(1)}}%<br>Rural Activity: ${{(100-p2).toFixed(1)}}%`);
        m2.onmouseleave = hideTooltip;
        area.appendChild(m2);

        row.appendChild(area);
        chart.appendChild(row);
    }});

    // Add Grid lines
    // Just visual hints at 25, 50, 75
    // Need to overlay on chart area... simpler to just assume fixed width?
    // Let's add a grid container behind rows.
    
    function showTooltip(e, html) {{
        tooltip.innerHTML = html;
        tooltip.style.opacity = 1;
        tooltip.style.left = (e.pageX + 10) + 'px';
        tooltip.style.top = (e.pageY - 10) + 'px';
    }}

    function hideTooltip() {{
        tooltip.style.opacity = 0;
    }}

</script>
</body>
</html>"""

if __name__ == "__main__":
    main()
