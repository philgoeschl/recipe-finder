import RecipeCard from "../RecipeCard";

export default function RecipeList() {
  console.log("### RecipeList");
  return (
    <div>
      <h2>Results</h2>
      <div>
        <RecipeCard id={1} />
        <RecipeCard id={2} />
      </div>
    </div>
  );
}
