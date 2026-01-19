import csv
import json
import os
import sys

# Process FINAL APR.csv for Force Graph
apr_csv_filename = "FINAL APR.csv"
apr_js_filename = "apr_graph_data.js"

print(f"Processing {apr_csv_filename}...")

try:
    if not os.path.exists(apr_csv_filename):
        print(f"Error: {apr_csv_filename} not found.")
    else:
        nodes = []
        # Use utf-8-sig for safely handling BOM if present
        with open(apr_csv_filename, "r", encoding='utf-8-sig') as f:
            reader = csv.DictReader(f)
            # Headers: Pincode,State,District,Total_Aadhar_Activity,Est_Pincode_Pop,Est_APR
            for row in reader:
                try:
                    pincode = row.get('Pincode', '').strip()
                    district = row.get('District', '').strip()
                    apr_str = row.get('Est_APR', '0').strip()
                    pop_str = row.get('Est_Pincode_Pop', '0').strip()
                    
                    if not apr_str: continue
                    
                    apr_val = float(apr_str)
                    try:
                        pop_val = int(pop_str)
                    except:
                        pop_val = 1000 # Default if missing
                    
                    # Logic: Green (Boom) if APR >= 1.0, Red (Ghost) if APR < 1.0
                    node_type = 'boom' if apr_val >= 1.0 else 'ghost'
                    
                    nodes.append({
                        "id": pincode,
                        "district": district,
                        "apr": apr_val,
                        "pop": pop_val,
                        "type": node_type,
                        "radius": 5 + (apr_val * 2) # dynamic radius based on APR (we will override this in frontend based on Pop)
                    })
                except ValueError:
                    continue # Skip bad rows
        
        js_content = f"const aprGraphData = {json.dumps(nodes, indent=2)};"
        with open(apr_js_filename, "w", encoding='utf-8') as f:
            f.write(js_content)
        print(f"{apr_js_filename} created with {len(nodes)} nodes.")

except Exception as e:
    print(f"Error processing APR CSV: {e}")
