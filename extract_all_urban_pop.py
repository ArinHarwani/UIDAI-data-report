import pdfplumber
import csv
import re

def clean_text(text):
    if not text: return ""
    return text.replace('\n', ' ').strip()

def extract_data(pdf_path, output_csv):
    results = []
    
    # Range identified from previous step
    pages_to_scan = range(76, 89) # 76 to 88 inclusive
    
    with pdfplumber.open(pdf_path) as pdf:
        for page_num in pages_to_scan:
            print(f"Processing Page {page_num}...")
            page = pdf.pages[page_num - 1]
            tables = page.extract_tables()
            
            for table in tables:
                if not table: continue
                
                # Setup column mapping
                header_map = {} # col_index -> State Name
                
                # 1. Find the Header Row (contains state names)
                # It's usually near the top. We look for 'INDIA' or other uppercase names
                header_row_idx = -1
                for i, row in enumerate(table[:10]):
                    # Check if row has any state-like name
                    row_text = [str(c).upper() for c in row if c]
                    if any("INDIA" in t or "PRADESH" in t or "KASHMIR" in t for t in row_text):
                        header_row_idx = i
                        break
                
                if header_row_idx == -1:
                    continue
                    
                # 2. Build Mapping
                current_state = None
                header_row = table[header_row_idx]
                
                # Columns: Year (0), State1_P(1), S1_M(2), S1_F(3), State2_P(4)...
                # But headers might be merged.
                # pdfplumber puts value in first cell, None in merged.
                
                # Careful: The "Year" column is 0.
                # Column 1 starts the data.
                
                for col_idx in range(1, len(header_row)):
                    val = clean_text(header_row[col_idx])
                    if val:
                        current_state = val
                    
                    if current_state:
                        # Identify if this column is Person, Male, or Female
                        # The sub-header (row + 1) usually has P/M/F or 1/2/3
                        # But we can assume triplets: P, M, F.
                        # Let's verify with subheader lookup if possible, or just assume triplets.
                        # The snippet showed: India spans 3 cols.
                        # So for a given State, it covers 3 columns.
                        
                        if col_idx not in header_map:
                            header_map[col_idx] = current_state

                # 3. Find 2025 Row
                for row in table:
                    val0 = clean_text(str(row[0]))
                    if '2025' in val0:
                        # Extract Data
                        # We iterate through keys in header_map
                        # But we need to group by State
                        
                        # Gather columns for each state
                        state_data = {} # State -> [vals]
                        
                        for col_idx, state in header_map.items():
                            val = clean_text(str(row[col_idx]))
                            if state not in state_data:
                                state_data[state] = []
                            state_data[state].append(val)
                            
                        # Now add to results
                        for state, vals in state_data.items():
                            # Expecting 3 values (P, M, F)
                            # But pure dictionary iteration might be unordered or split?
                            # Actually we iterated col_idx in order.
                            
                            # Clean state name
                            state_clean = re.sub(r'[^A-Za-z\s&]', '', state).strip()
                            
                            # Ensure we have 3 values
                            # Wait, if `header_map` assigns same state to col 1, 2, 3
                            # Then `state_data[state]` will have 3 values.
                            
                            p_val = vals[0] if len(vals) > 0 else ""
                            m_val = vals[1] if len(vals) > 1 else ""
                            f_val = vals[2] if len(vals) > 2 else ""
                            
                            results.append({
                                'State': state_clean,
                                'Person': p_val,
                                'Male': m_val,
                                'Female': f_val
                            })
                        
    # Write to CSV
    keys = ['State', 'Person', 'Male', 'Female']
    with open(output_csv, 'w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=keys)
        writer.writeheader()
        writer.writerows(results)
    
    print(f"Extraction complete. Saved to {output_csv}")

if __name__ == "__main__":
    pdf_file = "Population Projection Report 2011-2036 - upload_compressed_0.pdf"
    extract_data(pdf_file, "projected_urban_pop_2025.csv")
