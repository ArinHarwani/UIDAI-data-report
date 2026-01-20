import pdfplumber
import csv

def extract_page_data(pdf_path, page_num):
    print(f"Extracting Page {page_num}...")
    with pdfplumber.open(pdf_path) as pdf:
        page = pdf.pages[page_num - 1] # 0-indexed
        
        # Try extracting table
        tables = page.extract_tables()
        print(f"Found {len(tables)} tables.")
        
        for table in tables:
            # Print first few rows to debug
            for i, row in enumerate(table[:5]):
                print(f"Row {i}: {row}")
            
            # Look for 2025
            for row in table:
                if row[0] and '2025' in str(row[0]):
                    print(f"\nFOUND 2025 Data: {row}")
                    return

if __name__ == "__main__":
    pdf_file = "Population Projection Report 2011-2036 - upload_compressed_0.pdf"
    extract_page_data(pdf_file, 76)
