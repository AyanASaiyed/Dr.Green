from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This allows CORS for all routes

@app.route('/')
def index():
    return jsonify({"message": "Welcome to Dr Green's API"})

@app.route('/data', methods=['GET'])
def get_data():
    sample_data = {"plant": "Aloe Vera", "status": "healthy"}
    return jsonify(sample_data)

if __name__ == '__main__':
    app.run(debug=True)
