const Analysis = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <section>
        <h1 className="font-extrabold text-white text-4xl">Dr.Green🌱</h1>
      </section>

      <button className="bg-red-600 rounded-xl p-4 left-10 top-10 absolute text-white font-bold">
        Back
      </button>

      <section className="h-[35vh] w-[35vh] bg-white mt-10 rounded-xl">
        Plant Image will show up here
      </section>
      <section className="flex items-center justify-center h-[10vh] w-[90vh] bg-opacity-40 bg-gray-600 rounded-xl mt-10">
        <div className="w-[80vh] h-[3vh] bg-red-600 rounded-full"></div>
        <div className="text-5xl">😢</div>
      </section>
      <section className="bg-gray-700 flex items-center justify-center bg-opacity-35 h-[30vh] w-[120vh] rounded-xl mt-10">
        <p className="text-white font-extralight">
          Hey, this is a test description.
        </p>
      </section>
    </div>
  );
};

export default Analysis;
