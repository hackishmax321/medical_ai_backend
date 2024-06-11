import easyocr

def process_image(image_path):
    reader = easyocr.Reader(['en'])
    results = reader.readtext(image_path)

    # Processing result
    text = ''
    for result in results:
        text += result[1] + ' '
    return text