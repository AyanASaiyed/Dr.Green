import base64
import io
from PIL import Image

# Ensure the function accepts base64_image as an argument
def identify_plant(base64_image):
    try:
        # Strip off the 'data:image/png;base64,' part of the base64 string if it exists
        if base64_image.startswith("data:image"):
            base64_image = base64_image.split(",")[1]
        
        # Decode the base64 image to binary data
        image_data = base64.b64decode(base64_image)

        # Open the image using PIL (optional, but can be useful for validation)
        image = Image.open(io.BytesIO(image_data))

        return image_data, image
    except Exception as e:
        print(f"Error in identify_plant: {str(e)}")
        raise ValueError("Failed to process the base64 image.")
