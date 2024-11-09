from flask import Flask, request, jsonify
from utils.symptom_matcher import match_symptoms  # Ensure correct import

app = Flask(__name__)

@app.route('/diagnose', methods=['POST'])
def diagnose():
    data = request.json
    symptoms = data.get("symptoms", "")
    
    if not symptoms:
        return jsonify({"error": "No symptoms provided"}), 400
    
    # Call the updated match_symptoms function
    matched_diseases = match_symptoms(symptoms)
    
    # If no diseases were matched, return a message
    if matched_diseases == "No matching disease found.":
        return jsonify({"message": "No matching disease found."}), 404
    
    return jsonify({"diseases": matched_diseases})

if __name__ == '__main__':
    app.run(debug=True)
