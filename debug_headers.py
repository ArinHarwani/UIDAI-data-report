import pdfplumber

def debug_headers(pdf_path):
    pages_to_scan = range(76, 89)
    with pdfplumber.open(pdf_path) as pdf:
        for page_num in pages_to_scan:
            page = pdf.pages[page_num - 1]
            text = page.extract_text()
            if not text: continue
            
            lines = text.split('\n')
            
            # Find the header line (contains INDIA or JAMMU)
            for line in lines[:10]:
                if "INDIA" in line.upper() or "PRADESH" in line.upper() or "KASHMIR" in line.upper():
                    print(f"Page {page_num} Header: '{line}'")
                    # Check our expectations
                    if "JAMMU" in line:
                        print(f"  JAMMU present at index {line.find('JAMMU')}")
                    break

if __name__ == "__main__":
    pdf_file = "Population Projection Report 2011-2036 - upload_compressed_0.pdf"
    debug_headers(pdf_file)
