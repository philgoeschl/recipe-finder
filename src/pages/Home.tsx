import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

function createTitle(lastQuery: String) {
  if (lastQuery) {
    return `Results for "${lastQuery}"`
  }
  return "Results"
}

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [lastQuery, setLastQuery] = useState<String>("");

  const fetchRecipes = async (query: string) => {
    // Using Test API Key -> https://www.themealdb.com/api.php
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await res.json();
    const meals = data.meals || [];
    sessionStorage.setItem("lastSearchResults", JSON.stringify(meals));
    sessionStorage.setItem("lastSearchQuery", query);
    setRecipes(meals);
    setLastQuery(query);
  };

  useEffect(() => {
    const lastRecipes = sessionStorage.getItem("lastSearchResults");
    const lastQuery = sessionStorage.getItem("lastSearchQuery");
    if (lastRecipes) {
      setRecipes(JSON.parse(lastRecipes));
    }
    if (lastQuery) {
      setLastQuery(lastQuery);
    }
  }, []);

  return (
    <div>
      <NavigationBar />
      <div>
        <SearchBar onSearch={fetchRecipes} />
      </div>
      <div>
        <RecipeList recipes={recipes} title={createTitle(lastQuery)} />
      </div>
    </div>
  );
}
