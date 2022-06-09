const Hero = () => {
  return (
    <div className=" flex justify-center h-[80%]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-slate-800 dark:text-slate-100 text-6xl font-bold">
          The Best <span className="text-purple-700">Editor</span> For Your Needs
        </h1>
        <p className="text-lg my-8 w-2/4 text-center dark:text-gray-200 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          magnam, beatae quibusdam cumque repellendus perferendis maxime
          voluptas sunt facilis animi nostrum
        </p>
        <div className="flex">
          <button className="bg-purple-700 text-stone-100 rounded-lg p-2 px-4 text-xl mx-8">
            Get Started
          </button>
          <button className="border dark:text-gray-200 border-purple-700 text-xl py-2 px-4 rounded-lg">
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
