import { Link, useParams } from "react-router-dom";

export default function RecipeDetail() {
  console.log("### RecipeDetail:");
  const { id } = useParams();
  return (
    <div>
      <h1>Recipe Detail</h1>
      <div>{`ID: ${id}`}</div>

      <Link to="/">Back to start</Link>
    </div>
  );
}
