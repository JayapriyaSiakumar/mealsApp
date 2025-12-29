import axios from "axios";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  addToFavorites,
  removeFromFavorites,
  setLoading,
  setSelectedRecipe,
} from "../Redux/Features/recipesSlice";
import { useDispatch, useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

const RecipeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, selectedRecipe, favorites } = useSelector(
    (state) => state.recipes
  );
  const isFav = favorites.some((ele) => ele.idMeal === selectedRecipe.idMeal);

  useEffect(() => {
    const fetchRecipe = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = response.data;
        console.log(data);
        dispatch(setSelectedRecipe(data.meals[0]));
        console.log(data.meals[0]);
        dispatch(setLoading(false));
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const getIngredients = (meal) => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim()) {
        ingredients.push(`${ingredient} - ${measure} `);
      }
    }

    return ingredients;
  };

  const getInstructions = (instructions) => {
    return instructions
      .split(".")
      .map((step) => step.trim())
      .filter((step) => step.length > 0);
  };

  const toggleFavorite = () => {
    isFav
      ? dispatch(removeFromFavorites(selectedRecipe.idMeal))
      : dispatch(addToFavorites(selectedRecipe));
  };

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center text-lime-600">
        <PacmanLoader color="#CDDC39" />
      </div>
    );
  }

  return (
    <div>
      {selectedRecipe ? (
        <div className="max-w-6xl p-6 m-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold mb-4 ">
                {selectedRecipe.strMeal}
              </h1>
              <button
                type="button"
                onClick={toggleFavorite}
                className="px-4 py-2 bg-lime-500 hover:bg-lime-600 text-white text-lg rounded-xl">
                <span className="font-bold text-xl">
                  {isFav ? "❤️ Remove Favorite" : "🤍 Add To Favorite"}
                </span>
              </button>
            </div>
            <img
              className="rounded-xl shadow-lg my-6 w-full max-h-100 object-cover"
              src={selectedRecipe.strMealThumb}
              alt={selectedRecipe.strMealThumb}
            />
            <h2 className="text-lg font-bold">
              Category:{" "}
              <span className="text-sm font-medium">
                {selectedRecipe.strCategory}
              </span>
            </h2>
            <h2 className="text-lg font-bold">
              Area:{" "}
              <span className="text-sm font-medium">
                {selectedRecipe.strArea}
              </span>
            </h2>
            <br />
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside mb-4">
              {getIngredients(selectedRecipe).map((item, index) => (
                <li className="mb-2" key={index}>
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside mb-6">
              {getInstructions(selectedRecipe.strInstructions).map(
                (step, index) => (
                  <li className="mb-2" key={index}>
                    {step}
                  </li>
                )
              )}
            </ol>

            <div className="text-left ">
              <Link
                to={selectedRecipe.strYoutube}
                target="_blank"
                className="sm:max-w-sm cursor-pointer bg-red-600 text-white  font-bold px-5 py-3 rounded-lg hover:bg-red-500">
                ▶ Watch Cooking Video
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <h1>No data Fetched</h1>
      )}
    </div>
  );
};

export default RecipeDetails;
