import requests
import base64
from io import BytesIO
from config import Config

def identify_plant(base64_image):
    # Decode the base64 image into binary data
    image_data = base64.b64decode(base64_image.split(',')[1])  # Remove the data URL prefix if present

    # Use BytesIO to treat the binary data as a file-like object
    image_file = BytesIO(image_data)

    # Send the image data as a file in the request
    response = requests.post(
        "https://plant.id/api/v3/identification",
        headers={"Authorization": f"Bearer {Config.PLANT_ID_API_KEY}"},
        files={"images": ("image.jpg", image_file, "image/jpeg")},  # Treat the binary data as a JPEG image
        json={"organs": ["leaf", "flower"]},
    )
    
    return response.json()
