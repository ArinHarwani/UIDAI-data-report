import pdfplumber
import csv

def manual_extract(pdf_path, output_csv):
    results = []
    pages = range(76, 89)
    
    with pdfplumber.open(pdf_path) as pdf:
        for p in pages:
            page = pdf.pages[p-1]
            text = page.extract_text() or ""
            lines = text.split('\n')
            
            # Find 2025
            data_row = []
            for line in lines:
                if line.startswith('2025'):
                    data_row = line.split()[1:] # skip '2025'
                    break
            
            # Find Header (first line with uppercase that isn't TABLE)
            header_text = ""
            for line in lines:
                clean = line.strip()
                if "INDIA" in clean or "PRADESH" in clean or "KASHMIR" in clean or "LAKSHADWEEP" in clean:
                    header_text = clean
                    break
            
            if data_row:
                results.append({
                    'Page': p,
                    'Header_Snippet': header_text,
                    'Data_Count': len(data_row),
                    'Data': data_row
                })

    with open(output_csv, 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['Page', 'Header Snippet', 'Data Count', 'Val 1', 'Val 2', 'Val 3', 'Val 4', 'Val 5', 'Val 6', 'Val 7', 'Val 8', 'Val 9'])
        for r in results:
            row = [r['Page'], r['Header_Snippet'], r['Data_Count']] + r['Data']
            writer.writerow(row)
            
    print(f"Dumped {len(results)} pages to {output_csv}")

if __name__ == "__main__":
    pdf_file = "Population Projection Report 2011-2036 - upload_compressed_0.pdf"
    manual_extract(pdf_file, "intermediate_dump.csv")
