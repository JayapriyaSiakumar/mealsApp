import { createSlice } from "@reduxjs/toolkit";

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    selectedRecipe: null,
    favorites: [],
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    setSelectedRecipe: (state, action) => {
      state.selectedRecipe = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearSelectedRecipe: (state) => {
      state.selectedRecipe = null;
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (recipes) => recipes.idMeal !== action.payload
      );
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const {
  setLoading,
  setRecipes,
  setSelectedRecipe,
  setError,
  clearSelectedRecipe,
  addToFavorites,
  removeFromFavorites,
  setCategories,
} = recipesSlice.actions;
export default recipesSlice.reducer;
