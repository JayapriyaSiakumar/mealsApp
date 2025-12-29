import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { PacmanLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setRecipes } from "../Redux/Features/recipesSlice";
import Hero from "../Components/Hero";

const Recipes = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { loading, recipes } = useSelector((state) => state.recipes);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        console.log(response.data.meals);
        dispatch(setRecipes(response.data.meals || []));
        dispatch(setLoading(false));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search, dispatch]);

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center text-lime-600">
        <PacmanLoader color="#CDDC39" />
      </div>
    );
  }

  return (
    <>
      <Hero search={search} setSearch={setSearch} />
      {recipes.length > 0 ? (
        <div className="max-w-7xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recipes.map((item) => (
              <div key={item.idMeal}>
                <Card recipe={item} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex h-[70vh] flex-col justify-center items-center text-2xl font-semibold">
          <p className="text-4xl">🥧</p>
          No Meal Found...
        </div>
      )}
    </>
  );
};

export default Recipes;
