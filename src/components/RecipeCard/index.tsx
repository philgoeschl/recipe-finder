import { Link } from "react-router-dom";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface RecipeProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeProps) {
  console.log("### RecipeCard");
  return (
    <div>
      <div key={recipe.idMeal}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} width={100} />
        <p>{recipe.strMeal}</p>
        <Link
          to={`/recipe/${recipe.idMeal}`}
        >{`Go to recipe ${recipe.idMeal}`}</Link>
      </div>
    </div>
  );
}
