import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import SearchBar from "../SearchBar";

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

const NavigationBar: React.FC = () => {

  const navigate = useNavigate();

  const handleOnSearch = async (query: string) => {
    await fetchRecipes(query);
    navigate("/results");
  }

  return (
    <div className={styles.container}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/my-recipes">
        My Recipes
      </Link>
      <Link className={styles.link} to="/results">
        Last results
      </Link>
      <div className={styles.search}>
        <SearchBar onSearch={handleOnSearch} />
      </div>
    </div>
  );
}

export default NavigationBar;