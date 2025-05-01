import { Link } from "react-router-dom";

export default function RecipeCard({ id }: { id: number }) {
  console.log("### RecipeCard");
  return (
    <div>
      <div>{`Recipe ${id}`}</div>
      <div>Description</div>
      <Link to={`/recipe/${id}`}>{`Go to recipe ${id}`}</Link>
    </div>
  );
}
