import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";
import {
  setCategories,
  setError,
  setLoading,
  setRecipes,
} from "../Redux/Features/recipesSlice";
import axios from "axios";
import Card from "../Components/Card";

const Categories = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState();
  const { categories, loading, recipes } = useSelector(
    (state) => state.recipes
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        //const data = await response.json();
        dispatch(setCategories(response.data.categories));
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setError(error));
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterByCategory = async (category) => {
    dispatch(setLoading(true));
    setSelectedCategory(category);

    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    //const data = await res.json();
    console.log(res);
    dispatch(setRecipes(res.data.meals));
    dispatch(setLoading(false));
  };

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center text-lime-600">
        <PacmanLoader color="#CDDC39" />
      </div>
    );
  }

  return (
    <>
      <div className="mt-10 flex gap-2 justify-center items-center  w-full flex-wrap m-auto">
        {categories !== undefined &&
          categories.map((cat) => (
            <button
              type="button"
              className={`rounded-xl text-heading ${
                selectedCategory !== cat.strCategory
                  ? "bg-linear-to-r from-lime-200 via-lime-400 to-lime-500"
                  : "bg-gray-300 "
              } hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5`}
              key={cat.idCategory}
              onClick={() => filterByCategory(cat.strCategory)}>
              {cat.strCategory}
            </button>
          ))}
      </div>
      <div className="max-w-7xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recipes.map((item) => (
            <div key={item.idMeal}>
              <Card recipe={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
