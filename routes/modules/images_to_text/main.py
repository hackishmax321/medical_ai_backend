from ocr_processor import process_image
import sys

def main():
    if len(sys.argv) != 2:
        print("Usage: python main.py <image_path>")
        return

    image_path = sys.argv[1]
    extracted_text = process_image(image_path)
    print(extracted_text)

if __name__ == "__main__":
    main()