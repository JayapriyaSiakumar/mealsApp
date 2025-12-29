import React from "react";

const Hero = ({ search, setSearch }) => {
  return (
    <div className="relative h-75 bg-linear-to-r from-lime-400 to-lime-500">
      <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black">
          Explore Delicious Recipes
        </h1>
        <p className="text-gray-600">Tasty Recipes are here</p>
        <div className="relative p-3  rounded-lg w-full max-w-lg">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="rounded-md w-full p-3 border border-gray-200 bg-white"
            placeholder="🔎 Search for Meals..."
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
