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

  if (!isAlreadyLiked(meal)) {
    myRecipes.push(meal);
    localStorage.setItem("myRecipes", JSON.stringify(myRecipes));
  }
};

const isAlreadyLiked = (meal: Meal) => {
  const myRecipesJSON = localStorage.getItem("myRecipes");
  const myRecipes: Meal[] = myRecipesJSON ? JSON.parse(myRecipesJSON) : [];
  return myRecipes.some((m) => m.idMeal === meal.idMeal);
};

const removeFromMyRecipes = (meal: Meal) => {
  const myRecipesJSON = localStorage.getItem("myRecipes");
  const myRecipes: Meal[] = myRecipesJSON ? JSON.parse(myRecipesJSON) : [];

  if (isAlreadyLiked(meal)) {
    const myNewRecipes = myRecipes.filter((m) => m.idMeal !== meal.idMeal);
    localStorage.setItem("myRecipes", JSON.stringify(myNewRecipes));
  }
};

export default function MealDescription({ meal }: MealProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>{meal.strMeal}</h1>
      <p className={styles.description}>{meal.strInstructions}</p>
      <div className={styles.actions}>
        {!isAlreadyLiked(meal) ? (
          <button
            className={styles.button}
            onClick={() => addToMyRecipes(meal)}
          >
            Add to MyRecipes
          </button>
        ) : (
          <button
            className={styles.button}
            onClick={() => removeFromMyRecipes(meal)}
          >
            Remove from MyRecipes
          </button>
        )}
      </div>
    </div>
  );
}
