import React, { useState, useEffect } from "react";

const App = () => {
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
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
          className=""
        />
      </section>

      <section className="mt-10 bg-yellow-100">
        <p>Click + to upload the image</p>
      </section>
    </div>
  );
};

export default App;
