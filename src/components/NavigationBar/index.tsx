import { Link } from "react-router-dom";

export default function NavigationBar() {
  console.log("### NavigationBar");
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/my-recipes">My Recipes</Link>
    </div>
  );
}
