import MealDescription from "../MealDescription";
import MealVisual from "../MealVisual";
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

export default function MealDetail({ meal }: MealProps) {
  return (
    <div className={styles.container}>
      <MealVisual url={meal.strMealThumb} />
      <MealDescription meal={meal} />
    </div>
  );
}
