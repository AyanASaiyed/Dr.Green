import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    PLANT_ID_API_KEY = os.getenv("PLANT_ID_API_KEY")
