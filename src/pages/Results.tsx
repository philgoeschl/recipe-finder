import { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList";
import NavigationBar from "../components/NavigationBar";
import { useLocation } from "react-router-dom";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

function createTitle(lastQuery: string) {
  if (lastQuery) {
    return `Results for "${lastQuery}"`
  }
  return "Results"
}

const Results: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [lastQuery, setLastQuery] = useState<string>("");

  const location = useLocation();

  useEffect(() => {
    const lastRecipes = sessionStorage.getItem("lastSearchResults");
    const lastQuery = sessionStorage.getItem("lastSearchQuery");
    if (lastRecipes) {
      setRecipes(JSON.parse(lastRecipes));
    }
    if (lastQuery) {
      setLastQuery(lastQuery);
    }
  }, [location.key]);

  return (
    <div>
      <NavigationBar />
      <div>
        <RecipeList recipes={recipes} title={createTitle(lastQuery)} />
      </div>
    </div>
  );
}

export default Results;
