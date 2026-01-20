import csv

def combine_rural_urban(input_csv, output_csv):
    print(f"Reading {input_csv} and calculating Rural %...")
    
    data = []
    with open(input_csv, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Parse Urban values
            u_p = float(row['Person'])
            u_m = float(row['Male'])
            u_f = float(row['Female'])
            
            # Calculate Rural values (100 - Urban)
            r_p = 100.0 - u_p
            r_m = 100.0 - u_m
            r_f = 100.0 - u_f
            
            # Format to 2 decimal places to match apparent source precision
            
            new_row = {
                'State': row['State'],
                'Urban_Person': f"{u_p:.2f}",
                'Urban_Male': f"{u_m:.2f}",
                'Urban_Female': f"{u_f:.2f}",
                'Rural_Person': f"{r_p:.2f}",
                'Rural_Male': f"{r_m:.2f}",
                'Rural_Female': f"{r_f:.2f}"
            }
            data.append(new_row)
            
    # Write Combined File
    fieldnames = ['State', 'Urban_Person', 'Urban_Male', 'Urban_Female', 'Rural_Person', 'Rural_Male', 'Rural_Female']
    
    with open(output_csv, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(data)
        
    print(f"Created {output_csv} with {len(data)} rows.")

if __name__ == "__main__":
    combine_rural_urban("projected_urban_pop_2025_v2.csv", "projected_population_shares_2025.csv")
