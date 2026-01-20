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

def find_states(text):
    text_upper = text.upper()
    matches = []
    for known in EXPECTED_STATES:
        start = 0
        while True:
            idx = text_upper.find(known, start)
            if idx == -1: break
            matches.append((idx, known))
            start = idx + 1
    
    matches.sort(key=lambda x: x[0])
    
    unique_matches = []
    if matches:
        curr_idx, curr_name = matches[0]
        # Skip if contained in previous?
        
        for idx, name in matches[1:]:
            # Overlap check
            if idx < curr_idx + len(curr_name):
                # If overlaps, keep longest
                end = max(curr_idx + len(curr_name), idx + len(name))
                if len(name) > len(curr_name):
                    # Replace current
                    curr_idx, curr_name = idx, name
                # else ignore
            else:
                unique_matches.append(curr_name)
                curr_idx, curr_name = idx, name
        unique_matches.append(curr_name)
    
    return unique_matches

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
            
            year_idx = -1
            for i, line in enumerate(lines):
                if line.strip().startswith("Year"):
                    year_idx = i
                    break
            
            if year_idx == -1: continue
            
            # Find 2025 row first to know target count
            data_vals = []
            for line in lines:
                if line.startswith('2025'):
                    parts = line.split()
                    data_vals = parts[1:]
                    break
            
            if not data_vals: continue
            
            num_states = len(data_vals) // 3
            
            # Scan up to 3 lines above Year for headers
            candidates = []
            for offset in range(1, 4):
                if year_idx - offset >= 0:
                    candidates.insert(0, lines[year_idx - offset])
            
            combined_header = " ".join(candidates)
            print(f"  Combined Header: {combined_header}")
            
            states_found = find_states(combined_header)
            print(f"  States Found: {states_found}")
            
            # Align
            # If we found matches > num_states, filter by left-to-right order?
            # Or if matches < num_states, we have a problem.
            
            if len(states_found) == num_states:
                for s_idx, state in enumerate(states_found):
                    base = s_idx * 3
                    if base+2 < len(data_vals):
                        results.append({
                            'State': clean_state_name(state),
                            'Person': data_vals[base],
                            'Male': data_vals[base+1],
                            'Female': data_vals[base+2]
                        })
            else:
                print(f"  Mismatch: Expected {num_states}, Found {len(states_found)}")

    # Write CSV
    with open(output_csv, 'w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=['State', 'Person', 'Male', 'Female'])
        writer.writeheader()
        writer.writerows(results)
    print(f"Done. {len(results)} rows extracted.")

if __name__ == "__main__":
    pdf_file = "Population Projection Report 2011-2036 - upload_compressed_0.pdf"
    extract_data(pdf_file, "projected_urban_pop_2025.csv")
