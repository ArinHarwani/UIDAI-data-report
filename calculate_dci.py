import csv
import math

def main():
    input_file = 'district_compliance_stats.csv'
    output_file = 'district_dci_stats.csv'
    
    print(f"Reading {input_file}...")
    
    data = []
    with open(input_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames + ['DCI']
        
        for row in reader:
            try:
                # Parse Updates (Numerator)
                updates = int(row['Total_Bio_Updates_5_17'])
                
                # Parse Literacy (Denominator)
                literacy = float(row['Literacy_Rate_Percent'])
                
                # Formula: DCI = ln(Updates) / ln(Literacy)
                # Handle edge cases
                if updates <= 0:
                    dci = 0.0 # log(0) undefined
                elif literacy <= 1: 
                    dci = 0.0 # log(1)=0 => division by zero, and log(<1) is negative
                else:
                    numerator = math.log(updates)
                    denominator = math.log(literacy)
                    dci = numerator / denominator
                
                row['DCI'] = f"{dci:.4f}"
                
            except (ValueError, ZeroDivisionError) as e:
                print(f"Skipping DCI for {row['District']}: {e}")
                row['DCI'] = "0.0000"
            
            data.append(row)
            
    # Write output
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(data)
        
    print(f"Successfully created {output_file}")

if __name__ == "__main__":
    main()
