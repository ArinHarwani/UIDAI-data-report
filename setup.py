import csv
import json
import requests
import sys
import os

# Download India Districts GeoJSON
urls = [
    "https://raw.githubusercontent.com/geohacker/india/master/district/india_district.geojson",
    "https://raw.githubusercontent.com/datta07/INDIAN-SHAPEFILES/master/INDIA/INDIA_DISTRICTS.geojson",
    "https://raw.githubusercontent.com/udit-001/india-maps-data/main/districts.json"
]

geojson_filename = "india_districts.json"
geojson_js_filename = "india_geo.js"
geojson_saved = False

print("Downloading India District GeoJSON...")
for url in urls:
    try:
        print(f"Trying {url}...")
        r = requests.get(url)
        if r.status_code == 200:
            content = r.text
            # Basic validation to check if it's JSON
            try:
                json.loads(content)
                with open(geojson_filename, "w", encoding='utf-8') as f:
                    f.write(content)
                print("Success!")
                geojson_saved = True
                break
            except json.JSONDecodeError:
                print("Downloaded content is not valid JSON. Skipping.")
        else:
            print(f"Failed with status {r.status_code}")
    except Exception as e:
        print(f"Error: {e}")

if not geojson_saved:
    print("Failed to download GeoJSON. Please check internet connection or URLs.")
    # Create dummy file to prevent crash, though map won't work
    with open(geojson_filename, "w", encoding='utf-8') as f:
        f.write('{"type": "FeatureCollection", "features": []}')

# Convert GeoJSON to JS Variable
try:
    with open(geojson_filename, "r", encoding='utf-8') as f:
        content = f.read()
    with open(geojson_js_filename, "w", encoding='utf-8') as f:
        f.write(f"const indiaGeo = {content};")
    print(f"{geojson_js_filename} created.")
except Exception as e:
    print(f"Error creating JS Geo file: {e}")

# Process CSV Data
csv_filename = "india_data_cleaned.csv"
data_js_filename = "data.js"

print(f"Processing {csv_filename}...")
try:
    processed_data = []
    
    if not os.path.exists(csv_filename):
        print(f"Error: {csv_filename} not found.")
    else:
        with open(csv_filename, "r", encoding='utf-8') as f:
            reader = csv.DictReader(f)
            count = 0
            for row in reader:
                # Filter invalid rows based on user info (row 2 example)
                if row.get('state') == '100000' or row.get('district') == '100000':
                    continue
                
                # Convert numbers
                try:
                    row['age_0_5'] = int(row['age_0_5']) if row['age_0_5'] else 0
                    row['age_5_17'] = int(row['age_5_17']) if row['age_5_17'] else 0
                    row['age_18_greater'] = int(row['age_18_greater']) if row['age_18_greater'] else 0
                    # Year might be string or int, keep as is or ensure consistent string
                    row['Year'] = str(row['Year'])
                except ValueError:
                    # If parsing fails, default to 0 or skip? 
                    # User said "crucial data", so best to probably set to 0 and keep the record if district is valid
                    row['age_0_5'] = 0
                    row['age_5_17'] = 0
                    row['age_18_greater'] = 0

                processed_data.append(row)
                count += 1
        
        print(f"Processed {count} valid rows.")

        js_content = f"const enrollmentData = {json.dumps(processed_data, indent=2)};"
        with open(data_js_filename, "w", encoding='utf-8') as f:
            f.write(js_content)
        print(f"{data_js_filename} created.")

except Exception as e:
    print(f"Error processing CSV: {e}")
