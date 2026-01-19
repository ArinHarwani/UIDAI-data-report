import csv

def main():
    existing_file = 'district_biometric_stats.csv'
    output_file = 'district_biometric_stats_v2.csv'
    
    # User provided data (Rank -> Population)
    # Using Rank as primary key to avoid name mismatch issues if any
    pop_map = {
        '1': "728,999",
        '2': "1,117,361",
        '3': "3,487,731",
        '4': "2,148,665",
        '5': "1,379,647",
        '6': "3,681,896",
        '7': "1,024,091", # Note: Rank 7 in user list is Jhabua, in file it was Bahraich. User list priorities.
        # Wait, the user list has slightly different Ranks/Districts?
        # User: 7=Jhabua. File: 7=Bahraich. 
        # User: 9=Barwani. File: 9=Jhabua.
        # Let's map by DISTRICT NAME to be safe, normalizing spaces/case.
    }
    
    # Raw data provided by user to parse
    raw_data = [
        "1,Alirajpur,Madhya Pradesh,37.22,\"728,999\"",
        "2,Shravasti,Uttar Pradesh,46.74,\"1,117,361\"",
        "3,Bahraich,Uttar Pradesh,49.36,\"3,487,731\"",
        "4,Balrampur,Uttar Pradesh,49.51,\"2,148,665\"",
        "5,Koraput,Odisha,49.87,\"1,379,647\"",
        "6,Badaun,Uttar Pradesh,51.29,\"3,681,896\"",
        "7,Jhabua,Madhya Pradesh,54.53,\"1,024,091\"",
        "8,Rampur,Uttar Pradesh,53.34,\"2,335,398\"",
        "9,Barwani,Madhya Pradesh,49.08,\"1,385,659\"",
        "10,Purbi Champaran,Bihar,55.79,\"5,099,371\"",
        "11,Moradabad,Uttar Pradesh,56.77,\"4,772,006\"",
        "12,Sheopur,Madhya Pradesh,57.43,\"687,952\"",
        "13,Dhar,Madhya Pradesh,60.57,\"2,184,672\"",
        "14,Sitamarhi,Bihar,52.05,\"3,419,622\"",
        "15,Pashchim Champaran,Bihar,55.79,\"3,922,780\"",
        "16,Araria,Bihar,53.53,\"2,806,200\"",
        "17,Kishanganj,Bihar,55.46,\"1,690,400\"",
        "18,Katihar,Bihar,52.24,\"3,056,246\"",
        "19,Saharsa,Bihar,53.20,\"1,900,661\"",
        "20,Supaul,Bihar,57.67,\"2,229,076\"",
        "21,Madhepura,Bihar,52.25,\"1,994,618\"",
        "22,Muzaffarpur,Bihar,63.43,\"4,801,062\"",
        "23,Samastipur,Bihar,61.86,\"4,261,566\"",
        "24,Gopalganj,Bihar,64.47,\"2,562,012\"",
        "25,Siwan,Bihar,67.41,\"3,318,176\"",
        "26,Saran,Bihar,65.96,\"3,951,862\"",
        "27,Vaishali,Bihar,66.60,\"3,495,021\"",
        "28,Darbhanga,Bihar,56.14,\"3,921,971\"",
        "29,Begusarai,Bihar,63.87,\"2,954,367\"",
        "30,Murshidabad,West Bengal,66.59,\"7,103,807\""
    ]
    
    # Parse raw data into dictionary: DistrictName -> Population
    pop_lookup = {}
    for line in raw_data:
        parts = line.split(',')
        # Because population creates quotes like "728,999", we need proper CSV parsing
        pass
        
    reader = csv.reader(raw_data)
    for row in reader:
        # Rank=0, Dist=1, State=2, Lit=3, Pop=4
        if len(row) >= 5:
            d_name = row[1].strip().lower()
            pop = row[4].replace('"','').strip() # Keep commas or remove? 
            # I'll keep the string format "728,999" as requested
            pop_lookup[d_name] = pop

    print(f"Loaded {len(pop_lookup)} population entries.")

    updated_rows = []
    
    with open(existing_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames + ['Population_2011']
        
        for row in reader:
            d_name = row['District'].strip().lower()
            
            # Try to find match
            pop_val = "N/A"
            if d_name in pop_lookup:
                pop_val = pop_lookup[d_name]
            else:
                # Try simple variations
                if d_name == 'budaun': pop_val = pop_lookup.get('badaun', 'N/A')
                elif d_name == 'east champaran': pop_val = pop_lookup.get('purbi champaran', 'N/A')
                elif d_name == 'west champaran': pop_val = pop_lookup.get('pashchim champaran', 'N/A')
            
            row['Population_2011'] = pop_val
            updated_rows.append(row)

    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(updated_rows)
        
    print(f"Created {output_file} wih population data.")

if __name__ == "__main__":
    main()
