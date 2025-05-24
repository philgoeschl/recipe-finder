import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import MealDetail from "../components/MealDetail";

interface Meal {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
}

export default function RecipeDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("lastSearchResults");
    if (saved) {
      const meals: Meal[] = JSON.parse(saved);
      const found = meals.find((meal) => meal.idMeal === id);
      // TODO: check if content is complete -> from filter api the description is not loaded or stored
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
      <MealDetail meal={meal} />
    </div>
  );
}
