import pdfplumber
import csv
import re

EXPECTED_STATES = [
    "INDIA", "JAMMU & KASHMIR", "(UT)", "HIMACHAL PRADESH", "PUNJAB", "CHANDIGARH",
    "UTTARAKHAND", "HARYANA", "NCT OF DELHI", "DELHI", "RAJASTHAN", "UTTAR PRADESH",
    "BIHAR", "SIKKIM", "ARUNACHAL PRADESH", "NAGALAND", "MANIPUR", "MIZORAM",
    "TRIPURA", "MEGHALAYA", "ASSAM", "WEST BENGAL", "JHARKHAND", "ODISHA",
    "CHHATTISGARH", "MADHYA PRADESH", "GUJARAT", "DAMAN & DIU", "DADRA & NAGAR HAVELI",
    "MAHARASHTRA", "ANDHRA PRADESH", "KARNATAKA", "GOA", "LAKSHADWEEP", "KERALA",
    "TAMIL NADU", "PUDUCHERRY", "ANDAMAN & NICOBAR ISLANDS", "TELANGANA", "LADAKH"
]

def clean_state_name(name):
    # Remove (UT) and extra spaces
    name = name.replace('(UT)', '').replace('&', 'and')
    return re.sub(r'\s+', ' ', name).strip()

def extract_data(pdf_path, output_csv):
    results = []
    pages_to_scan = range(76, 89)
    
    with pdfplumber.open(pdf_path) as pdf:
        for page_num in pages_to_scan:
            print(f"Processing Page {page_num}...")
            page = pdf.pages[page_num - 1]
            text = page.extract_text()
            if not text: continue
            
            lines = text.split('\n')
            
            # Find "Year" line
            year_idx = -1
            for i, line in enumerate(lines):
                if line.strip() == "Year" or line.strip().startswith("Year"):
                    year_idx = i
                    break
            
            if year_idx == -1:
                print("  'Year' row not found.")
                continue
            
            # Header line is likely year_idx - 1
            header_line = lines[year_idx - 1]
            
            # Check if empty, maybe go up one more
            if not header_line.strip():
                header_line = lines[year_idx - 2]
                
            print(f"  Header Line: '{header_line}'")
            
            # Extract States from header_line
            # We know the 2025 row has N values.
            # Find 2025 row first to know column count.
            
            data_vals = []
            for line in lines:
                if line.startswith('2025'):
                    parts = line.split()
                    data_vals = parts[1:] # skip year
                    break
            
            if not data_vals:
                print("  2025 data not found.")
                continue
                
            num_cols = len(data_vals)
            if num_cols % 3 != 0:
                print(f"  Warning: Column count {num_cols} not divisible by 3.")
                
            num_states = num_cols // 3
            print(f"  Found {num_cols} values -> {num_states} states.")
            
            # Now parse header_line into `num_states` names
            # Heuristic: The text is spaced out.
            # "INDIA JAMMU & KASHMIR (UT) HIMACHAL PRADESH"
            # We can't simply split by space.
            # But we can split by "  " (double space) if pdfplumber preserved it?
            # Or use the state list logic.
            
            # Let's try matching known states against the string.
            found_states = []
            
            # Normalize header
            h_clean = header_line.upper()
            
            # We need to find `num_states` matches that cover the string left-to-right.
            # Simple loop:
            # 1. Search for known states.
            # 2. Store their start index.
            # 3. Sort by index.
            # 4. Filter overlaps?
            
            matches = []
            for known in EXPECTED_STATES:
                # Find all occurrences
                start = 0
                while True:
                    idx = h_clean.find(known, start)
                    if idx == -1: break
                    matches.append((idx, known))
                    start = idx + 1
            
            matches.sort(key=lambda x: x[0])
            
            # Dedup and selection
            # If we match "JAMMU & KASHMIR" and "JAMMU", we pick the longer one usually.
            # But "JAMMU" starts at same index.
            
            # Strategy: Consolidate matches starting at same/similar index.
            unique_matches = []
            if matches:
                curr_idx, curr_name = matches[0]
                for idx, name in matches[1:]:
                    if idx == curr_idx:
                        # Pick longer
                        if len(name) > len(curr_name):
                            curr_name = name
                    elif idx > curr_idx + len(curr_name): # Non-overlapping
                        unique_matches.append(curr_name)
                        curr_idx, curr_name = idx, name
                    # else overlap, skip (keep first/longest)
                unique_matches.append(curr_name)
            
            # Check if count matches
            print(f"  Identified States: {unique_matches}")
            
            if len(unique_matches) != num_states:
                print(f"  Mismatch! Expected {num_states}, found {len(unique_matches)}.")
                # Fallback: Just use placeholders if we can't parse?
                # Or try to fix.
                # E.g. "INDIA" might be found.
                if len(unique_matches) < num_states:
                    print("  Trying to split by space heuristic as fallback...")
                    # This is risky.
                
            # Extract
            # Use `unique_matches` if count matches, otherwise be careful.
            # We'll zip(unique_matches, data_chunks)
            
            for s_idx in range(min(num_states, len(unique_matches))):
                state_name = unique_matches[s_idx]
                base = s_idx * 3
                if base+2 < len(data_vals):
                    results.append({
                        'State': clean_state_name(state_name),
                        'Person': data_vals[base],
                        'Male': data_vals[base+1],
                        'Female': data_vals[base+2]
                    })

    # Write CSV
    with open(output_csv, 'w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=['State', 'Person', 'Male', 'Female'])
        writer.writeheader()
        writer.writerows(results)
        
    print(f"Done. {len(results)} rows extracted.")

if __name__ == "__main__":
    pdf_file = "Population Projection Report 2011-2036 - upload_compressed_0.pdf"
    extract_data(pdf_file, "projected_urban_pop_2025.csv")
