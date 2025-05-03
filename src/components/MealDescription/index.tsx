import styles from "./index.module.scss";

interface Meal {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
}

interface MealProps {
  meal: Meal;
}

export default function MealDescription({ meal }: MealProps) {
  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <p>{meal.strInstructions}</p>
    </div>
  );
}
