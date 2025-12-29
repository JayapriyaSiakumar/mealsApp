import React from "react";
import { Link } from "react-router-dom";
import {
  addToFavorites,
  removeFromFavorites,
} from "../Redux/Features/recipesSlice";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ recipe }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.recipes);
  const isFav = favorites.some((ele) => ele.idMeal === recipe.idMeal);

  const toggleFavorite = () => {
    isFav
      ? dispatch(removeFromFavorites(recipe.idMeal))
      : dispatch(addToFavorites(recipe));
  };

  return (
    <div className="rounded overflow-hidden shadow-lg   transition-transform duration-300 ease-in-out hover:scale-110">
      <div className="relative">
        <img
          className="w-full h-50 object-cover transform group-hover:scale-110 transition duration-300"
          src={recipe.strMealThumb}
          alt="Recipe Thumb"
        />
        <button
          type="button"
          onClick={toggleFavorite}
          className="cursor-pointer text-sm absolute top-0 right-0 bg-lime-400 px-4 text-white rounded-full h-12 w-12 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-lime-600 transition duration-500 ease-in-out">
          <span className="font-bold text-xl">{isFav ? "❤️" : "🤍"}</span>
        </button>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="px-2 py-4 max-w-[45%]">
          <div className="truncate  font-semibold text-md  hover:text-indigo-600 transition duration-500 ease-in-out">
            {recipe.strMeal}
          </div>
          <p className="text-gray-500 text-sm">{recipe.strCategory}</p>
        </div>
        <div className="pr-6 max-w-[50%]">
          <Link
            to={`/meal/${recipe.idMeal}`}
            className="px-3 py-1 bg-lime-500 text-white rounded-sm shadow hover:bg-lime-600">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
