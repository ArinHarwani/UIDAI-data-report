import csv
import glob
import os

def normalize(name):
    return name.strip().lower()

def main():
    # 1. Load Literacy Data
    districts_lut = {} # normalized_name -> {original_name, literacy_rate, rank}
    literacy_file = 'least_literacy_districts.csv'
    
    # Alias Map for matching
    ALIASES = {
        'shravasti': 'shrawasti',
        'badaun': 'budaun',
        'purbi champaran': 'east champaran',
        'pashchim champaran': 'west champaran',
        'purba champaran': 'east champaran',
    }

    print(f"Loading {literacy_file}...")
    try:
        with open(literacy_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                d_name = row['District']
                norm_name = normalize(d_name)
                
                # Use alias if exists, otherwise norm_name
                search_key = ALIASES.get(norm_name, norm_name)
                
                districts_lut[search_key] = {
                    'Original': d_name,
                    'State': row['State'],
                    'Literacy': row['Literacy_Rate_Percent'],
                    'Rank': row['Rank'],
                    'Total_Bio_5_17': 0
                }
                # Also map the original norm_name to the same object so we can find it
                if search_key != norm_name:
                     districts_lut[norm_name] = districts_lut[search_key]
    except Exception as e:
        print(f"Error reading literacy file: {e}")
        return

    print(f"Loaded {len(districts_lut)} districts to track.")

    # 2. Process Biometric Files
    biometric_files = glob.glob('api_data_aadhar_biometric/api_data_aadhar_biometric/*.csv')
    print(f"Found {len(biometric_files)} biometric data files.")

    for file_path in biometric_files:
        print(f"Processing {os.path.basename(file_path)}...")
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                # Header expected: date,state,district,pincode,bio_age_5_17,bio_age_17_
                for row in reader:
                    d_name = row.get('district', '')
                    if not d_name: continue
                    
                    norm_name = normalize(d_name)
                    
                    if norm_name in districts_lut:
                        val_str = row.get('bio_age_5_17', '0')
                        try:
                            val = int(val_str)
                            districts_lut[norm_name]['Total_Bio_5_17'] += val
                        except ValueError:
                            pass
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

    # 3. Output Results
    output_file = 'district_biometric_stats.csv'
    print(f"Writing results to {output_file}...")
    
    # Sort by original Rank
    # Deduplicate values (since aliases point to same obj)
    seen_ranks = set()
    unique_districts = []
    
    for d in districts_lut.values():
        if d['Rank'] not in seen_ranks:
            unique_districts.append(d)
            seen_ranks.add(d['Rank'])
            
    sorted_districts = sorted(unique_districts, key=lambda x: int(x['Rank']))
    
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        fieldnames = ['Rank', 'District', 'State', 'Literacy_Rate_Percent', 'Total_Bio_Updates_5_17']
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        
        found_count = 0
        for d in sorted_districts:
            writer.writerow({
                'Rank': d['Rank'],
                'District': d['Original'],
                'State': d['State'],
                'Literacy_Rate_Percent': d['Literacy'],
                'Total_Bio_Updates_5_17': d['Total_Bio_5_17']
            })
            if d['Total_Bio_5_17'] > 0:
                found_count += 1
                
    print(f"Done. found data for {found_count}/{len(districts_lut)} districts.")

if __name__ == "__main__":
    main()
