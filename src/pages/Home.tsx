import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import { useState } from "react";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async (query: string) => {
    // Using Test API Key -> https://www.themealdb.com/api.php
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await res.json();
    setRecipes(data.meals || []);
  };
  return (
    <div>
      <h1>Recipes and more</h1>
      <div>
        <SearchBar onSearch={fetchRecipes} />
      </div>
      <div>
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
}
