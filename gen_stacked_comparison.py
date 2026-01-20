import re
import csv
import json

def normalize(name):
    name = name.upper().strip()
    # Replace whole word AND with &
    name = re.sub(r'\bAND\b', '&', name)
    name = name.replace('PUDUCHERRY', 'PONDICHERRY')
    if "NCT OF DELHI" in name: return "DELHI"
    if "DADRA" in name and "NAGAR" in name: return "DADRA & NAGAR HAVELI"
    if "ANDAMAN" in name and "NICOBAR" in name: return "ANDAMAN & NICOBAR ISLANDS"
    return name

def main():
    pop_file = "projected_population_shares_2025.csv"
    aadhar_file = "FINAL URBAN RURAL.csv"
    
    pop_data = {}
    with open(pop_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            norm_name = normalize(row['State'])
            pop_data[norm_name] = {
                'urban_pop': float(row['Urban_Person']),
                'rural_pop': float(row['Rural_Person'])
            }
            
    aadhar_data = {}
    with open(aadhar_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            norm_name = normalize(row['State'])
            if "DADRA" in norm_name and "DAMAN" in norm_name:
                 # Map merged DNH/DD to DNH for comparison logic or just ignore?
                 # Let's map to DNH since CSV1 has DNH.
                 norm_name = "DADRA & NAGAR HAVELI" 
                 
            try:
                aadhar_data[norm_name] = {
                    'urban_act': float(row['Urban Activity %']),
                    'rural_act': float(row['Rural Activity %'])
                }
            except ValueError:
                continue

    merged = []
    all_states = set(pop_data.keys()).union(set(aadhar_data.keys()))
    
    for state in all_states:
        if state in pop_data and state in aadhar_data:
            gap = aadhar_data[state]['urban_act'] - pop_data[state]['urban_pop']
            merged.append({
                'state': state.title(),
                'urban_pop': pop_data[state]['urban_pop'],
                'rural_pop': pop_data[state]['rural_pop'],
                'urban_act': aadhar_data[state]['urban_act'],
                'rural_act': aadhar_data[state]['rural_act'],
                'gap': gap
            })

    # Sort by absolute gap descending
    merged.sort(key=lambda x: abs(x['gap']), reverse=True)

    html_content = create_html(merged)
    
    with open('urban_rural_stacked.html', 'w', encoding='utf-8') as f:
        f.write(html_content)
        
    print(f"Generated urban_rural_stacked.html with {len(merged)} states.")

def create_html(data):
    # JSON injection - careful with f-strings
    json_data = json.dumps(data)
    
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Urbar vs Rural: Stacked Comparison (2025)</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {{
            --bg-color: #0f172a;
            --card-bg: #1e293b;
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
            
            --proj-urban: #10b981; /* Emerald 500 */
            --proj-rural: #334155; /* Slate 700 */
            
            --act-urban: #3b82f6;  /* Blue 500 */
            --act-rural: #1e293b;  /* Slate 800 - darker */
            
            --gap-pos: #22c55e;
            --gap-neg: #ef4444;
        }}

        body {{
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-primary);
            margin: 0; padding: 40px;
            display: flex; justify-content: center;
        }}

        .container {{
            width: 100%; max-width: 1200px;
            background-color: var(--card-bg);
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            padding: 40px;
        }}

        h1 {{
             font-size: 2rem; margin-bottom: 10px;
             color: #fff;
        }}
        
        .subtitle {{
            color: var(--text-secondary); margin-bottom: 40px;
            font-size: 1.1rem;
        }}

        .legend {{
            display: flex; gap: 30px; margin-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px;
        }}
        .legend-group {{ display: flex; gap: 10px; align-items: center; }}
        .box {{ width: 16px; height: 16px; border-radius: 4px; }}

        .row {{
            display: grid;
            grid-template-columns: 200px 1fr 80px; /* Name | Bars | Gap Val */
            gap: 20px;
            margin-bottom: 24px;
            align-items: center;
        }}

        .state-name {{ font-weight: 600; font-size: 1rem; color: #e2e8f0; }}

        .bars-container {{
            display: flex; flex-direction: column; gap: 4px;
            position: relative;
        }}

        /* Bar styles */
        .bar-wrapper {{
            display: flex; width: 100%; height: 24px;
            border-radius: 4px; overflow: hidden;
            position: relative;
        }}
        
        .segment {{
            height: 100%;
            display: flex; align-items: center; justify-content: flex-end;
            padding-right: 8px; font-size: 0.75rem; font-weight: 600;
            transition: width 0.5s ease-out;
        }}

        .proj .urban {{ background-color: var(--proj-urban); color: #064e3b; }}
        .proj .rural {{ background-color: var(--proj-rural); }}
        
        .act .urban {{ background-color: var(--act-urban); color: #1e3a8a; }}
        .act .rural {{ background-color: var(--act-rural); }}

        .label-tag {{
            font-size: 0.7rem; color: var(--text-secondary);
            position: absolute; left: -60px; top: 4px; width: 50px; text-align: right;
        }}

        .gap-val {{
            font-weight: 700; font-size: 1rem; text-align: right;
        }}
        .gap-pos {{ color: var(--gap-pos); }}
        .gap-neg {{ color: var(--gap-neg); }}

    </style>
</head>
<body>

<div class="container">
    <h1>Expected vs. Reality: Urbanization</h1>
    <div class="subtitle">Comparing <strong>Projected Urban Share (2025)</strong> with <strong>Actual Aadhaar Urban Activity</strong>. <br> Positive values indicate higher-than-expected urban digital activity.</div>

    <div class="legend">
        <div class="legend-group">
            <div class="box" style="background: var(--proj-urban)"></div>
            <span>Target (Projected Urban)</span>
        </div>
        <div class="legend-group">
            <div class="box" style="background: var(--act-urban)"></div>
            <span>Actual (Aadhaar Urban)</span>
        </div>
        <div class="legend-group">
            <div class="box" style="background: var(--proj-rural)"></div>
            <span>Rural Share</span>
        </div>
    </div>

    <div id="chart"></div>
</div>

<script>
    const data = {json_data};
    const container = document.getElementById('chart');

    data.forEach(d => {{
        const row = document.createElement('div');
        row.className = 'row';

        // 1. State Name
        const name = document.createElement('div');
        name.className = 'state-name';
        name.textContent = d.state;
        row.appendChild(name);

        // 2. Bars
        const bars = document.createElement('div');
        bars.className = 'bars-container';

        // Projected Bar
        const projBar = document.createElement('div');
        projBar.className = 'bar-wrapper proj';
        // HTML generation for segments - need to beware of braces
        projBar.innerHTML = `
            <div class="segment urban" style="width: ${{d.urban_pop}}%">
                ${{d.urban_pop > 15 ? d.urban_pop.toFixed(0) + '%' : ''}}
            </div>
            <div class="segment rural" style="width: ${{d.rural_pop}}%"></div>
        `;
        bars.appendChild(projBar);

        // Actual Bar
        const actBar = document.createElement('div');
        actBar.className = 'bar-wrapper act';
        actBar.innerHTML = `
             <div class="segment urban" style="width: ${{d.urban_act}}%">
                ${{d.urban_act > 15 ? d.urban_act.toFixed(0) + '%' : ''}}
             </div>
             <div class="segment rural" style="width: ${{d.rural_act}}%"></div>
        `;
        bars.appendChild(actBar);

        row.appendChild(bars);

        // 3. Gap Value
        const gap = document.createElement('div');
        const diff = d.urban_act - d.urban_pop;
        const sign = diff > 0 ? '+' : '';
        gap.className = `gap-val ${{diff > 0 ? 'gap-pos' : 'gap-neg'}}`;
        gap.textContent = `${{sign}}${{diff.toFixed(1)}}%`;
        
        row.appendChild(gap);

        container.appendChild(row);
    }});

</script>
</body>
</html>"""

if __name__ == "__main__":
    main()
