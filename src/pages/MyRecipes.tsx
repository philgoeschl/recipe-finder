import { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList";
import { Link } from "react-router-dom";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export default function MyRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const clearMyRecipes = () => {
    localStorage.removeItem("myRecipes");
    setRecipes([]);
  };

  useEffect(() => {
    const saved = localStorage.getItem("myRecipes");
    if (saved) {
      setRecipes(JSON.parse(saved));
    }
  }, []);

  return (
    <div>
      <h1>My stored recipes</h1>
      <button onClick={() => clearMyRecipes()}>Clear my recipes</button>
      <div>
        <RecipeList recipes={recipes} />
      </div>
      <Link to="/">Back to start</Link>
    </div>
  );
}
