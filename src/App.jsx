import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Recipes from "./Pages/Recipes";
import RecipeDetails from "./Pages/RecipeDetails";
import Favorites from "./Pages/Favorites";
import NotFound from "./Pages/NotFound";
import Categories from "./Pages/Categories";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/meal/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
