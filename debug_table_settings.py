import pdfplumber

def debug_table_settings(pdf_path, page_num):
    print(f"Extracting Page {page_num} with text strategy...")
    with pdfplumber.open(pdf_path) as pdf:
        page = pdf.pages[page_num - 1]
        
        # Use text strategy for implied columns
        settings = {
            "vertical_strategy": "text", 
            "horizontal_strategy": "text",
            "snap_tolerance": 3
        }
        
        tables = page.extract_tables(table_settings=settings)
        print(f"Found {len(tables)} tables.")
        
        for table in tables:
            for i, row in enumerate(table[:5]):
                 print(f"Row {i}: {row}")
            
            # Check 2025
            for row in table:
                if row[0] and '2025' in str(row[0]):
                    print(f"\nFOUND 2025 Data: {row}")

if __name__ == "__main__":
    pdf_file = "Population Projection Report 2011-2036 - upload_compressed_0.pdf"
    debug_table_settings(pdf_file, 76)
