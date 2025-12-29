import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Components/Card";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.recipes);

  return (
    <>
      {favorites.length > 0 ? (
        <div className="max-w-7xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {favorites.map((item) => (
              <div key={item.idMeal}>
                <Card recipe={item} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex h-[70vh] flex-col justify-center items-center text-2xl font-semibold">
          <p className="text-4xl">💚</p>
          No Favorites Added Yet...
        </div>
      )}
    </>
  );
};

export default Favorites;
