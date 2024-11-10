import json

# Load the disease data
with open('data/disease.json', 'r') as f:
    disease_data = json.load(f)

def match_symptoms(symptoms_text):
    # List to store matched diseases
    matched_diseases = []

    # Convert user input to lowercase to handle case insensitivity
    symptoms_text = symptoms_text.lower()

    # Iterate through the disease data
    for entry in disease_data:
        # Check if any symptom in the entry matches the user's input
        matched_symptoms = [symptom for symptom in entry["symptoms"] if symptom.lower() in symptoms_text]
        
        # If there are any matched symptoms, add the disease to the matched_diseases list
        if matched_symptoms:
            matched_diseases.append({"disease": entry["disease"], "matched_symptoms": matched_symptoms})

    # If any diseases matched, return them, otherwise return a default message
    if matched_diseases:
        return matched_diseases
    else:
        return {"message": "No matching disease found."}

# Example usage
symptoms_input = "Hey my plant looks sick and it has yellow leaves"
result = match_symptoms(symptoms_input)
print(result)
