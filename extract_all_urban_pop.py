import pdfplumber
import csv
import re

EXPECTED_STATES = [
    "INDIA", "JAMMU & KASHMIR", "HIMACHAL PRADESH", "PUNJAB", "CHANDIGARH",
    "UTTARAKHAND", "HARYANA", "NCT OF DELHI", "DELHI", "RAJASTHAN", "UTTAR PRADESH",
    "BIHAR", "SIKKIM", "ARUNACHAL PRADESH", "NAGALAND", "MANIPUR", "MIZORAM",
    "TRIPURA", "MEGHALAYA", "ASSAM", "WEST BENGAL", "JHARKHAND", "ODISHA",
    "CHHATTISGARH", "MADHYA PRADESH", "GUJARAT", "DAMAN & DIU", "DADRA & NAGAR HAVELI",
    "MAHARASHTRA", "ANDHRA PRADESH", "KARNATAKA", "GOA", "LAKSHADWEEP", "KERALA",
    "TAMIL NADU", "PUDUCHERRY", "ANDAMAN & NICOBAR ISLANDS", "TELANGANA", "LADAKH"
]

def clean_state_name(name):
    name = name.replace('(UT)', '').replace('&', 'and')
    return re.sub(r'\s+', ' ', name).strip()

def find_states_in_line(line):
    line_upper = line.upper()
    found = []
    
    # Sort by length descending to match "NCT OF DELHI" before "DELHI"
    # and "JAMMU & KASHMIR" before "JAMMU"
    sorted_targets = sorted(EXPECTED_STATES, key=len, reverse=True)
    
    matches = []
    
    # Simple strategy: Find all occurrences
    for state in sorted_targets:
        if state in line_upper:
            # We must find the index
            start = 0
            while True:
                idx = line_upper.find(state, start)
                if idx == -1: break
                matches.append((idx, state))
                # Mask it to avoid re-finding or sub-finding
                # But masking might mess up indices for others if length changes.
                # So we replace with same length placeholder.
                line_upper = line_upper[:idx] + "#" * len(state) + line_upper[idx+len(state):]
                start = idx + len(state)
    
    matches.sort(key=lambda x: x[0])
    return [m[1] for m in matches]

def extract_data(pdf_path, output_csv):
    results = []
    pages_to_scan = range(76, 89) 
    
    total_states_found = 0
    
    with pdfplumber.open(pdf_path) as pdf:
        for page_num in pages_to_scan:
            try:
                print(f"Processing Page {page_num}...")
                page = pdf.pages[page_num - 1]
                text = page.extract_text()
                if not text:
                    print("  No text found.")
                    continue
                
                lines = text.split('\n')
                
                year_idx = -1
                for i, line in enumerate(lines):
                    if line.strip().startswith("Year"):
                        year_idx = i
                        break
                
                if year_idx == -1:
                    print("  'Year' row not found.")
                    continue
                
                # Check lines above Year for States
                header_states = []
                for i in range(1, 4):
                    if year_idx - i >= 0:
                        potential_line = lines[year_idx - i]
                        found = find_states_in_line(potential_line)
                        if found:
                            header_states = found
                            print(f"  Found states in line '{potential_line}': {found}")
                            break
                            
                if not header_states:
                    print("  No states found in header.")
                    continue
                
                # Find 2025 Data
                data_vals = []
                for line in lines:
                    if line.startswith('2025'):
                        parts = line.split()
                        data_vals = parts[1:] # Skip '2025'
                        break
                
                if not data_vals:
                    print("  2025 data not found.")
                    continue
                
                # Validate
                num_vals = len(data_vals)
                num_states = len(header_states)
                
                # Each state has 3 columns: Person, Male, Female
                expected_vals = num_states * 3
                
                if num_vals < expected_vals:
                    print(f"  Mismatch: Found {num_vals} values but {num_states} states ({expected_vals} expected).")
                    # Try to align
                else:
                    # Align
                    for s_idx, state in enumerate(header_states):
                        base = s_idx * 3
                        p = data_vals[base]
                        m = data_vals[base+1]
                        f = data_vals[base+2]
                        results.append({
                            'State': clean_state_name(state),
                            'Person': p,
                            'Male': m,
                            'Female': f
                        })
                    total_states_found += num_states
            except Exception as e:
                print(f"  Error on page {page_num}: {e}")

    # Write CSV
    with open(output_csv, 'w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=['State', 'Person', 'Male', 'Female'])
        writer.writeheader()
        writer.writerows(results)
        
    print(f"Done. Extracted {len(results)} rows.")

if __name__ == "__main__":
    pdf_file = "Population Projection Report 2011-2036 - upload_compressed_0.pdf"
    extract_data(pdf_file, "projected_urban_pop_2025.csv")
