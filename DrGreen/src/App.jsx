import React, { useState, useEffect } from 'react';

const App = () => {

  const uploadFiles = () =>{
    document.getElementById('selectFile').click()
  }

  const InfoButton = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
      setShowPopup(true);
    };

    const handleOutsideClick = (event) => {
      if (showPopup) {
        setShowPopup(false);
      }
    };

    useEffect(() => {
      document.addEventListener('click', handleOutsideClick);

      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, [showPopup]);

    return (
      <div className="flex flex-col items-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="bg-white text-black w-12 h-12 rounded-full absolute top-4 right-4 shadow-md hover:shadow-lg hover:bg-gray-200">
          i
        </button>

        {showPopup && (
          <div
            className="absolute top-16 right-4 bg-opacity-80 bg-gray-600 p-4 w-72 h- auto rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-gray-200 text-sm "> Upload an image of your plant to identify any potential diseases and receive recommended solutions for treatment!! </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <section className="mt-10">
        <h1 className="font-extrabold text-white text-3xl">Dr.Green🌱</h1>
      </section>

      <section>
        <InfoButton />
      </section>

      <section className="mt-10"> 
        <button className="bg-opacity-70 bg-gray-600 w-[65vw] h-[65vh] text-[10rem]" onClick={uploadFiles} >
          +
        </button>
        <input id="selectFile" type = "file" style={{display: "none"}} accept="image/png, image/jpeg, image/jpg" />
      </section>

      <section className="mt-10 bg-yellow-100">
        <p>Click + to upload the image</p>
      </section>
    </div>
  );


};

export default App;

