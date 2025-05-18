import { useEffect, useState } from "react";
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
  const isMealLiked = (meal: Meal) => {
    const myRecipesJSON = localStorage.getItem("myRecipes");
    const myRecipes: Meal[] = myRecipesJSON ? JSON.parse(myRecipesJSON) : [];
    return myRecipes.some((m) => m.idMeal === meal.idMeal);
  };

  const addToMyRecipes = (meal: Meal) => {
    const myRecipesJSON = localStorage.getItem("myRecipes");
    const myRecipes: Meal[] = myRecipesJSON ? JSON.parse(myRecipesJSON) : [];

    if (!isMealLiked(meal)) {
      myRecipes.push(meal);
      localStorage.setItem("myRecipes", JSON.stringify(myRecipes));
    }
  };

  const removeFromMyRecipes = (meal: Meal) => {
    const myRecipesJSON = localStorage.getItem("myRecipes");
    const myRecipes: Meal[] = myRecipesJSON ? JSON.parse(myRecipesJSON) : [];

    if (isMealLiked(meal)) {
      const myNewRecipes = myRecipes.filter((m) => m.idMeal !== meal.idMeal);
      localStorage.setItem("myRecipes", JSON.stringify(myNewRecipes));
    }
  };
  const [isAlreadyLiked, setIsAlreadyLiked] = useState<boolean>(
    isMealLiked(meal)
  );

  useEffect(() => {
    setIsAlreadyLiked(isMealLiked(meal));
  }, [isAlreadyLiked, meal]);

  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>{meal.strMeal}</h1>
      <p className={styles.description}>{meal.strInstructions}</p>
      <div className={styles.actions}>
        {!isAlreadyLiked ? (
          <button
            className={styles.button}
            onClick={() => {
              addToMyRecipes(meal);
              setIsAlreadyLiked(true);
            }}
          >
            Add to MyRecipes
          </button>
        ) : (
          <button
            className={styles.button}
            onClick={() => {
              removeFromMyRecipes(meal);
              setIsAlreadyLiked(false);
            }}
          >
            Remove from MyRecipes
          </button>
        )}
      </div>
    </div>
  );
}
