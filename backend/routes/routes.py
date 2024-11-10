# routes.py
from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
import os
from utils import identify_plant

app_routes = Blueprint('app_routes', __name__)
UPLOAD_FOLDER = "uploads/"

@app_routes.route("/identify", methods=["POST"])
def identify():
    if "file" not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    filename = secure_filename(file.filename)
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(file_path)

    result = identify_plant(file_path)

    return jsonify(result)

@app_routes.route("/")
def home():
    return "Hello, Flask is running!"
