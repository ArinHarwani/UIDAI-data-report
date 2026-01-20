import pdfplumber
import csv
import re

# List of expected headers (States/UTs)
# Based on Census/Report common names
EXPECTED_STATES = [
    "INDIA",
    "JAMMU & KASHMIR (UT)", "JAMMU & KASHMIR",
    "HIMACHAL PRADESH",
    "PUNJAB",
    "CHANDIGARH (UT)", "CHANDIGARH",
    "UTTARAKHAND",
    "HARYANA",
    "NCT OF DELHI", "DELHI",
    "RAJASTHAN",
    "UTTAR PRADESH",
    "BIHAR",
    "SIKKIM",
    "ARUNACHAL PRADESH",
    "NAGALAND",
    "MANIPUR",
    "MIZORAM",
    "TRIPURA",
    "MEGHALAYA",
    "ASSAM",
    "WEST BENGAL",
    "JHARKHAND",
    "ODISHA",
    "CHHATTISGARH",
    "MADHYA PRADESH",
    "GUJARAT",
    "DAMAN & DIU", "DAMAN & DIU (UT)",
    "DADRA & NAGAR HAVELI", "DADRA & NAGAR HAVELI (UT)",
    "MAHARASHTRA",
    "ANDHRA PRADESH",
    "KARNATAKA",
    "GOA",
    "LAKSHADWEEP (UT)", "LAKSHADWEEP",
    "KERALA",
    "TAMIL NADU",
    "PUDUCHERRY (UT)", "PUDUCHERRY",
    "ANDAMAN & NICOBAR ISLANDS (UT)", "ANDAMAN & NICOBAR ISLANDS",
    "TELANGANA"
]

def find_states_in_line(line):
    line_upper = line.upper()
    found = []
    
    # Simple substring search - greedy?
    # We want to match "JAMMU & KASHMIR (UT)" before "JAMMU & KASHMIR"
    # So sort expected by length descending
    sorted_targets = sorted(EXPECTED_STATES, key=len, reverse=True)
    
    # We need to find positions to order them correcty
    # This is slightly tricky because "UTTAR PRADESH" and "ANDHRA PRADESH" share "PRADESH"
    # But usually names are distinct.
    
    # Better: Identify non-overlapping matches.
    # Scan string from left to right?
    
    # Let's clean the line first.
    # The pdfplumber text often has spaces. 
    # "INDIA JAMMU & KASHMIR (UT) HIMACHAL PRADESH"
    
    matches = []
    
    for state in sorted_targets:
        if state in line_upper:
            # Check where it is
            idx = line_upper.find(state)
            # Ensure it's not a substring of another match (already covered by length sort?)
            # Wait, "PRADESH" isn't in list, so "HIMACHAL PRADESH" is safe.
            # But "DELHI" inside "NCT OF DELHI".
            # Sorting by length desc handles "NCT OF DELHI" first.
            
            # We add it if it doesn't overlap significantly with existing matches?
            # Actually, since we remove it from string or mask it?
            
            # Simple approach: Find all, assume the report doesn't duplicate names in one line.
            # Store (index, name)
            
            # Note: find() only gets first occurrence.
            # But these headers are unique per page usually.
            
            matches.append((idx, state))
            
            # Mask this in line_upper to avoid double counting
            # e.g. replacing with underscores
            line_upper = line_upper.replace(state, "_" * len(state))
            
    # Sort by index
    matches.sort(key=lambda x: x[0])
    
    # Filter out empty/bad matches if any?
    return [m[1] for m in matches]

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
            
            header_states = []
            
            # logic to find header
            for i, line in enumerate(lines):
                # Heuristic: line before "Year" line or similar
                # Or just check if line has states
                
                found_states = find_states_in_line(line)
                if len(found_states) >= 1: # Found a header line
                    # Usually pages have 3 or more states.
                    # Verify it's not a footnote.
                    if "TABLE" in line: continue
                    
                    # Assume this is the header
                    header_states = found_states
                    print(f"  Header Found: {header_states}")
                    break
            
            if not header_states:
                print("  No header found.")
                continue
                
            # Find 2025
            for line in lines:
                if line.startswith('2025'):
                    parts = line.split()
                    # parts[0] is '2025'
                    vals = parts[1:]
                    
                    # Validation
                    num_vals = len(vals)
                    num_states = len(header_states)
                    
                    print(f"  2025 Row: {num_vals} values found. Expecting {num_states * 3} (3 per state).")
                    
                    if num_vals >= num_states * 3:
                        # Extract
                        for s_idx, state in enumerate(header_states):
                            base = s_idx * 3
                            # Safe bounds check
                            if base+2 < len(vals):
                                p = vals[base]
                                m = vals[base+1]
                                f = vals[base+2]
                                
                                results.append({
                                    'State': state,
                                    'Person': p,
                                    'Male': m,
                                    'Female': f
                                })
                    else:
                        print("  Mismatch in columns!")

    # Write CSV
    with open(output_csv, 'w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=['State', 'Person', 'Male', 'Female'])
        writer.writeheader()
        writer.writerows(results)
        
    print(f"Done. {len(results)} rows extracted.")

if __name__ == "__main__":
    pdf_file = "Population Projection Report 2011-2036 - upload_compressed_0.pdf"
    extract_data(pdf_file, "projected_urban_pop_2025.csv")
