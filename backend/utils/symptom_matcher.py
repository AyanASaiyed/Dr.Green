import json

# Load the disease data
with open('data/disease.json', 'r') as f:
    disease_data = json.load(f)

def match_symptoms(symptoms_text):
    # Basic keyword matching example
    for entry in disease_data:
        if all(symptom in symptoms_text.lower() for symptom in entry["symptoms"]):
            return entry["disease"]
    return "Disease not found"
