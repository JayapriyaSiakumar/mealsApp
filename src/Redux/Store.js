import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./Features/recipesSlice";

export const Store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});
