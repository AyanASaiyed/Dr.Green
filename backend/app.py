from flask import Flask, request, jsonify
from utils import symptom_matcher

app = Flask(__name__)

@app.route('/diagnose', methods=['POST'])
def diagnose():
    data = request.json
    symptoms = data.get("symptoms", "")
    
    if not symptoms:
        return jsonify({"error": "No symptoms provided"}), 400
    
    disease = symptom_matcher(symptoms)
    return jsonify({"disease": disease})

if __name__ == '__main__':
    app.run(debug=True)
