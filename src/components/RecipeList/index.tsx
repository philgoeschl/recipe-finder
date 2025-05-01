import RecipeCard from "../RecipeCard";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface RecipeListProps {
  recipes: Recipe[];
}

export default function RecipeList({ recipes }: RecipeListProps) {
  console.log("### Recipes:", recipes);
  return (
    <div>
      <h2>Results</h2>
      <div>
        {recipes.length === 0 ? (
          <p>No recipes found.</p>
        ) : (
          recipes.map((recipe) => <RecipeCard recipe={recipe} />)
        )}
      </div>
    </div>
  );
}
