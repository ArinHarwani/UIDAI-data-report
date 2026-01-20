import pdfplumber

def list_matching_pages(pdf_path, search_text):
    print(f"Scanning {pdf_path} for '{search_text}'...")
    matches = []
    with pdfplumber.open(pdf_path) as pdf:
        for i, page in enumerate(pdf.pages):
            text = page.extract_text()
            if text and search_text in text:
                print(f"Found on Page {i+1}")
                matches.append(i+1)
    
    print(f"Total Matches: {len(matches)}")
    print(f"Pages: {matches}")

if __name__ == "__main__":
    pdf_file = "Population Projection Report 2011-2036 - upload_compressed_0.pdf"
    target_header = "Proportion (Percent) of Projected Urban Population"
    list_matching_pages(pdf_file, target_header)
