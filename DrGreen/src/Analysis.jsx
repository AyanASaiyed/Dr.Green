import React from "react";

const Analysis = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <section>
        <h1 className="font-extrabold text-white text-4xl">Dr.Green🌱</h1>
      </section>

      <section className="h-[35vh] w-[35vh] bg-white mt-10 rounded-xl"></section>
      <section className="flex items-center justify-center h-[10vh] w-[90vh] bg-opacity-40 bg-gray-600 rounded-xl mt-10">
        <div className="w-[80vh] h-[3vh] bg-red-600 rounded-full"></div>
        <div className="text-5xl">😢</div>
      </section>
      <section className=""></section>
    </div>
  );
};

export default Analysis;
