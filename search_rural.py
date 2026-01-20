import pdfplumber

def search_rural_table(pdf_path):
    # Search specifically for "Rural" in headers
    target = "RURAL"
    print(f"Scanning for '{target}' in headers...")
    
    with pdfplumber.open(pdf_path) as pdf:
        for i, page in enumerate(pdf.pages):
            text = page.extract_text()
            if not text: continue
            
            lines = text.split('\n')
            # Check first few lines for Table header characteristics
            for line in lines[:20]:
                if "TABLE" in line.upper() and target in line.upper():
                    print(f"FOUND MATCH Page {i+1}: {line.strip()}")
                elif "PROPORTION" in line.upper() and target in line.upper():
                    print(f"FOUND MATCH Page {i+1}: {line.strip()}")

if __name__ == "__main__":
    pdf_file = "Population Projection Report 2011-2036 - upload_compressed_0.pdf"
    search_rural_table(pdf_file)
