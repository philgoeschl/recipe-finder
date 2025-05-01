import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";

export default function Home() {
  console.log("### Home");
  return (
    <div>
      <h1>Home</h1>
      <div>
        <SearchBar />
      </div>
      <div>
        <RecipeList />
      </div>
    </div>
  );
}
