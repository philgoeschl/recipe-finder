import { Link } from "react-router-dom";
import styles from "./index.module.scss";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface RecipeProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeProps) {
  return (
    <Link to={`/recipe/${recipe.idMeal}`}>
      <div
        key={recipe.idMeal}
        className={styles.tile}
        style={{ backgroundImage: `url(${recipe.strMealThumb})` }}
      >
        <div className={styles.overlay}>
          <h3>{recipe.strMeal}</h3>
        </div>
      </div>
    </Link>
  );
}
