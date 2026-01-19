import csv

def main():
    input_file = 'district_biometric_stats_v2.csv'
    output_file = 'district_compliance_stats.csv'
    
    print(f"Reading {input_file}...")
    
    data = []
    with open(input_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames + ['Compliance']
        
        for row in reader:
            try:
                # Parse Updates
                updates_str = row['Total_Bio_Updates_5_17']
                updates = int(updates_str) if updates_str else 0
                
                # Parse Population (has commas)
                pop_str = row['Population_2011'].replace(',', '').strip()
                population = int(pop_str) if pop_str else 0
                
                # Calculate Compliance
                if population > 0:
                    compliance = updates / population
                else:
                    compliance = 0.0
                
                # Format to scientific notation or decimal? 
                # Given the likely small numbers (e.g. 50k / 2m = 0.025), decimal 6 places is good.
                row['Compliance'] = f"{compliance:.6f}"
                
            except ValueError as e:
                print(f"Skipping calculation for {row['District']}: {e}")
                row['Compliance'] = "0.000000"
            
            data.append(row)
            
    # Write output
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(data)
        
    print(f"Successfully created {output_file}")

if __name__ == "__main__":
    main()
