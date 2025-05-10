import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";

const fetchRecipes = async (query: string) => {
  // Using Test API Key -> https://www.themealdb.com/api.php
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  const data = await res.json();
  const meals = data.meals || [];
  sessionStorage.setItem("lastSearchResults", JSON.stringify(meals));
  sessionStorage.setItem("lastSearchQuery", query);
};

const Home: React.FC = () => {

  const navigate = useNavigate();

  const handleOnSearch = async (query: string) => {
    await fetchRecipes(query);
    navigate("/results");
  }

  return (
    <div>
      <NavigationBar />
      <div>
        <SearchBar onSearch={handleOnSearch} />
      </div>
    </div>
  );
}


export default Home;