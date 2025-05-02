import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

interface Meal {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
}

export default function RecipeDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState<Meal | null>(null);

  const addToMyRecipes = (meal: Meal) => {
    const myRecipesJSON = localStorage.getItem("myRecipes");
    const myRecipes: Meal[] = myRecipesJSON ? JSON.parse(myRecipesJSON) : [];

    const exists = myRecipes.some((m) => m.idMeal === meal.idMeal);

    if (!exists) {
      myRecipes.push(meal);
      localStorage.setItem("myRecipes", JSON.stringify(myRecipes));
    }
  };

  useEffect(() => {
    const saved = sessionStorage.getItem("lastSearchResults");
    if (saved) {
      const meals: Meal[] = JSON.parse(saved);
      const found = meals.find((meal) => meal.idMeal === id);
      if (found) {
        setMeal(found);
      } else {
        // directly try to fetch the id
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((res) => res.json())
          .then((data) => setMeal(data.meals?.[0] || null));
      }
    }
  }, [id]);

  if (!meal) return <div>Loading...</div>;

  return (
    <div>
      <NavigationBar />
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
      <button onClick={() => addToMyRecipes(meal)}>Add to MyRecipes</button>
    </div>
  );
}
