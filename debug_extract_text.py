import pdfplumber

def debug_text(pdf_path, page_num):
    with pdfplumber.open(pdf_path) as pdf:
        page = pdf.pages[page_num - 1]
        text = page.extract_text()
        print(f"--- TEXT OF PAGE {page_num} ---")
        print(text)
        print("--- END TEXT ---")

if __name__ == "__main__":
    pdf_file = "Population Projection Report 2011-2036 - upload_compressed_0.pdf"
    debug_text(pdf_file, 76)
