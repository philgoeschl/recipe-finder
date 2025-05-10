import RecipeCard from "../RecipeCard";
import styles from "./index.module.scss";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface RecipeListProps {
  recipes: Recipe[];
  title: string;
}

export default function RecipeList({ recipes, title }: RecipeListProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.headline}>{title}</h2>
      <div className={styles.list}>
        {recipes.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          recipes.map((recipe) => <RecipeCard key={recipe.idMeal} recipe={recipe} />)
        )}
      </div>
    </div>
  );
}
