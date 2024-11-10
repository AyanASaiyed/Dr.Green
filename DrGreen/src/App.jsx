import React, { useState } from "react";

const App = () => {
  // State to hold the base64 image string
  const [base64Image, setBase64Image] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert image file to base64 string
      const base64 = await convertBase64(file);
      setBase64Image(base64); // Save base64 image to state
      // Send the base64 image to the backend
      sendToBackend(base64);
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result); // Return the base64 string
      };

      fileReader.onerror = (error) => {
        reject(error); // In case of an error
      };
    });
  };

  const sendToBackend = async (base64Image) => {
    try {
      const response = await fetch("http://localhost:5000/identify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: base64Image }), // Send the base64 image
      });

      const data = await response.json();
      console.log(data); // Handle the response from the backend
    } catch (error) {
      console.error("Error sending image to backend:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <section className="mt-10">
        <h1 className="font-extrabold text-green-700 text-3xl">Dr.Green🌱</h1>
      </section>

      <section className="mt-10">
        <input
          id="fileInput"
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e) => {
            uploadImage(e);
          }}
        />
      </section>

      <section className="mt-10 bg-yellow-100">
        <p>Click + to upload the image</p>
      </section>
    </div>
  );
};

export default App;
