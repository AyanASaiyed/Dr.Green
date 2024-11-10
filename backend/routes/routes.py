import requests
from PIL import Image
from flask import Blueprint, request, jsonify
from config import Config
from utils import identify_plant

app_routes = Blueprint('app_routes', __name__)

@app_routes.route('/identify', methods=['POST'])
def identify():
    try:
        # Get the base64-encoded image from the request
        data = request.get_json()
        base64_image = data.get('image')

        if not base64_image:
            raise ValueError("No image provided")

        # Pass the base64 image to the identify_plant function
        #image_data, image = identify_plant(base64_image)

        # Send the image data to the Plant ID API for identification
        response = requests.post(
            "https://plant.id/api/v3/health_assessment?details=local_name,description,url,treatment,classification,common_names,cause",
            headers={"Api-Key": Config.PLANT_ID_API_KEY, 
                     "Content-Type": "application/json"} , # Use Api-Key header instead of Authorization
            #files={"images": ("image.png", image_data, "image/png")},  # Corrected file format
            json={  "health" : "only",
                    "images": [base64_image],  # Replace with actual base64 image data
                    "latitude": 49.207,
                    "longitude": 16.608,
                    "similar_images": True,
            }

        )

        # Check the response status
        if response.status_code == 201:
            response_data = response.json()
            for suggestion in response_data["result"]["disease"]["suggestions"]:
                print(f"Disease: {suggestion['name']}")
                print(f"Cause: {suggestion['details']['cause']}")
                print("Treatment:")
                for treatment_type, treatments in suggestion["details"]["treatment"].items():
                    print(f"  {treatment_type.capitalize()} Treatments:")
                    for treatment in treatments:
                        print(f"    - {treatment}")
                print("\n")
            #task_id = response_data.get("id")


        elif response.status_code != 200:
            # Handle errors
            print(f"Error from Plant ID API: {response.status_code}")
            print(response.text)
            return jsonify({"error": f"Plant ID API error: {response.status_code}"}), 500

        # Return the response from the Plant ID API if no async flag is set
        if response.headers.get("Content-Type") == "application/json":
            return jsonify(response.json())
        else:
            return jsonify({"error": "Non-JSON response received from Plant ID API"}), 500

    except ValueError as e:
        print(f"ValueError: {str(e)}")
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500
