# utils.py
import requests
from config import Config  # Import Config class from the config module


def identify_plant(image_path):
    with open(image_path, "rb") as image_file:
        response = requests.post(
            "https://plant.id/api/v3/identification",
            headers={"Authorization": f"Bearer {Config.PLANT_ID_API_KEY}"},
            files={"images": image_file},
            json={"organs": ["leaf", "flower"]},
        )
    return response.json()
