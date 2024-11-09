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
        # Create a flag to check if the disease matches
        matched = False

        # For each disease entry, check if any of its symptoms are in the user's input
        for symptom in entry["symptoms"]:
            # Check if the symptom is found in the user's symptoms text
            if symptom.lower() in symptoms_text:
                matched = True
            else:
                matched = False
                break  # Stop checking if one symptom is not found

        # If all symptoms are matched for this disease, add it to the matched diseases list
        if matched:
            matched_diseases.append({"disease": entry["disease"], "matched_symptoms": entry["symptoms"]})

    # If any diseases matched, return them, otherwise return a default message
    if matched_diseases:
        return matched_diseases
    else:
        return "No matching disease found."

# Example usage
symptoms_input = "Hey my plant looks sick and it has red spots"
result = match_symptoms(symptoms_input)
print(result)
