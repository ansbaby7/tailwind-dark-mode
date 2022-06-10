const Hero = () => {
  return (
    <div className=" flex justify-center h-[80%]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-slate-800 dark:text-slate-100 text-center text-2xl mx-2 sm:text-3xl md:text-4xl lg:text-6xl font-bold">
          The Best <span className="text-purple-700">Editor</span> For Your Needs
        </h1>
        <p className="text-md leading-1 sm:text-lg lg:text-xl my-8 ml-6 mr-2  sm:mx-none sm:w-2/4 text-left xs:text-center dark:text-gray-200 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          magnam, beatae quibusdam cumque repellendus perferendis maxime
          voluptas sunt facilis animi nostrum
        </p>
        <div className="flex">
          <button className="bg-purple-700 text-stone-100 rounded-lg py-2 px-2 sm:px-4 text-md md:text-xl mx-8">
            Get Started
          </button>
          <button className="border dark:text-gray-200 border-purple-700 py-2 px-2 mr-6  sm:mr-none sm:px-4 text-md md:text-xl rounded-lg">
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
