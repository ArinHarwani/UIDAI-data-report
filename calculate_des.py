import csv
import os

def main():
    input_file = 'district_compliance_stats.csv'
    output_file = 'district_des_final.csv'
    
    print(f"Reading {input_file}...")
    
    if not os.path.exists(input_file):
        print(f"Error: {input_file} does not exist.")
        return

    data = []
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            if not reader.fieldnames:
                print("Error: Input CSV has no header.")
                return
                
            # Add DES to fieldnames if not present
            fieldnames = [f for f in reader.fieldnames if f != 'DES'] + ['DES']
            
            for row in reader:
                try:
                    # Biometric Intensity (Compliance)
                    compliance_str = row.get('Compliance', '0')
                    compliance = float(compliance_str)
                    
                    # Literacy Rate
                    literacy_str = row.get('Literacy_Rate_Percent', '1')
                    literacy = float(literacy_str)
                    
                    # Formula: DES = (Compliance / Literacy) * 10000
                    if literacy > 0:
                        des = (compliance / literacy) * 10000
                    else:
                        des = 0.0
                    
                    row['DES'] = f"{des:.4f}"
                    
                except ValueError as e:
                    print(f"Skipping DES for {row.get('District', 'Unknown')}: {e}")
                    row['DES'] = "0.0000"
                
                data.append(row)
    except Exception as e:
        print(f"Error reading file: {e}")
        return
            
    # Write output
    try:
        with open(output_file, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(data)
        print(f"Successfully created {output_file}")
    except Exception as e:
        print(f"Error writing file: {e}")

if __name__ == "__main__":
    main()
