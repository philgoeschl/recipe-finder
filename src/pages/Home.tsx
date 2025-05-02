import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";

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
    const meals = data.meals || [];
    sessionStorage.setItem("lastSearchResults", JSON.stringify(meals));
    setRecipes(meals);
  };

  useEffect(() => {
    const saved = sessionStorage.getItem("lastSearchResults");
    if (saved) {
      setRecipes(JSON.parse(saved));
    }
  }, []);

  return (
    <div>
      <NavigationBar />
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
