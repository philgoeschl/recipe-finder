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

const addToMyRecipes = (meal: Meal) => {
    const myRecipesJSON = localStorage.getItem("myRecipes");
    const myRecipes: Meal[] = myRecipesJSON ? JSON.parse(myRecipesJSON) : [];

    const exists = myRecipes.some((m) => m.idMeal === meal.idMeal);

    if (!exists) {
      myRecipes.push(meal);
      localStorage.setItem("myRecipes", JSON.stringify(myRecipes));
    }
  };

export default function MealDescription({ meal }: MealProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>{meal.strMeal}</h1>
      <p className={styles.description}>{meal.strInstructions}</p>
      <div className={styles.actions}>
        <button className={styles.button} onClick={() => addToMyRecipes(meal)}>Add to MyRecipes</button>
      </div>
    </div>
  );
}
