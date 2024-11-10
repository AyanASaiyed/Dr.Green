import React, { useState } from "react";

const App = () => {
  const [Image, setImage] = useState(""); // State to hold the base64 image
  const [response, setResponse] = useState(""); // State to store the response from the backend

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImage(base64); // Save the base64 image to state
    console.log(base64); // Log the base64 string (for debugging)

    // Send the base64 image to the backend
    await sendToBackend(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // Function to send base64 image to the Flask backend
  const sendToBackend = async (base64Image) => {
    try {
      const response = await fetch("http://localhost:5000/identify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: base64Image }), // Send base64 image as JSON
      });

      const data = await response.json(); // Get the response from the backend
      setResponse(data); // Save the response to state (for display)
      console.log(data); // Log the response (for debugging)
    } catch (error) {
      console.error("Error sending image to backend:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <section className="mt-10">
        <h1 className="font-extrabold text-white text-5xl">Dr.Green🌱</h1>
      </section>

      <section className="mt-10">
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e) => {
            uploadImage(e);
          }}
          className="file:bg-gradient-to-b file:from-green-500 file:to-green-800 file:rounded-full file:m-3 file:border-none file:text-white file:font-extralight file:cursor-pointer file:shadow-lg
          bg-gradient-to-br from-gray-600 to-gray-700 text-white/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60"
        />
      </section>

      {Image && (
        <section className="mt-10">
          <img
            src={Image}
            alt="Uploaded"
            className="h-[50vh] rounded-xl mt-10"
          />
        </section>
      )}

      <section className="bg-transparent border-white border-4 mt-10 flex items-center justify-start flex-col w-[90vw] rounded-xl mb-5 px-6">
        {response && (
          <div className="mt-5 w-full text-center">
            <h1 className="text-white font-bold text-3xl text-center bg-transparent pb-2">
              {Array.isArray(response.result.disease.suggestions[0].name)
                ? response.result.disease.suggestions[0].name.join(", ")
                : typeof response.result.disease.suggestions[0].name ===
                  "object"
                ? Object.values(
                    response.result.disease.suggestions[0].name
                  ).join(", ")
                : response.result.disease.suggestions[0].name}
            </h1>
            <p className="text-white text-l text-center break-words bg-transparent mb-4 font-extralight">
              {Array.isArray(
                response.result.disease.suggestions[0].details.treatment
              )
                ? response.result.disease.suggestions[0].details.treatment.join(
                    " "
                  )
                : typeof response.result.disease.suggestions[0].details
                    .treatment === "object"
                ? Object.values(
                    response.result.disease.suggestions[0].details.treatment
                  ).join(" ")
                : response.result.disease.suggestions[0].details.treatment}
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
