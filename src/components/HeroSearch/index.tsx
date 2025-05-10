import { useNavigate } from "react-router-dom";
import Search from "../Search";
import styles from "./index.module.scss";

const mealPrompts: string[] = [
    "Craving something delicious? Find your next meal now!",
    "What's cooking? Discover your next favorite dish!",
    "Hungry for inspiration? Search tasty meals here!",
    "Feed your cravings — search your next meal!",
    "Don’t know what to eat? Let’s find it together!"
];

const getRandomPrompt = (): string => {
    const index = Math.floor(Math.random() * mealPrompts.length);
    return mealPrompts[index];
};


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

const HeroSearch: React.FC = () => {

    const navigate = useNavigate();

    const handleOnSearch = async (query: string) => {
        await fetchRecipes(query);
        navigate("/results");
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.headline}>{getRandomPrompt()}</h1>
            <Search onSearch={handleOnSearch} formClassOverride={styles.form} inputClassOverride={styles.input} buttonClassOverride={styles.button} />
        </div>
    )
}

export default HeroSearch;