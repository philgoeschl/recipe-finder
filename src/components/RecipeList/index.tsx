import RecipeCard from "../RecipeCard";
import styles from "./index.module.scss";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface RecipeListProps {
  recipes: Recipe[];
}

export default function RecipeList({ recipes }: RecipeListProps) {
  return (
    <div className={styles.container}>
      <h2>Results</h2>
      <div className={styles.list}>
        {recipes.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          recipes.map((recipe) => <RecipeCard recipe={recipe} />)
        )}
      </div>
    </div>
  );
}
