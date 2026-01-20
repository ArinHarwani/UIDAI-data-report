import pdfplumber

def find_table_page(pdf_path, search_text):
    print(f"Searching for '{search_text}' in {pdf_path}...")
    with pdfplumber.open(pdf_path) as pdf:
        for i, page in enumerate(pdf.pages):
            text = page.extract_text()
            if text and search_text in text:
                print(f"\nFOUND MATCH on Page {i+1}")
                print("-" * 40)
                # Print first few lines to valid
                lines = text.split('\n')[:10]
                for line in lines:
                    print(line)
                return i + 1
    print("Text not found.")
    return None

if __name__ == "__main__":
    pdf_file = "Population Projection Report 2011-2036 - upload_compressed_0.pdf"
    # Search for a distinctive part of the table header
    target_header = "Proportion (Percent) of Projected Urban Population"
    find_table_page(pdf_file, target_header)
