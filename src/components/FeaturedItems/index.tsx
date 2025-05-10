import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import RecipeCard from "../RecipeCard";

interface Recipe {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

const FeaturedItems: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem("myRecipes");
        if (saved) {
            const last3Items = [...JSON.parse(saved)].reverse().slice(0, 3);
            setRecipes(last3Items);
        }
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.headline}>Last 3 liked recipes</h2>
            <div className={styles.content}>

                {recipes.length === 0 ? (
                    <p>No recipes found.</p>
                ) : (
                    recipes.map((recipe) => <RecipeCard key={recipe.idMeal} recipe={recipe} />)
                )}
            </div>
        </div>
    )
}

export default FeaturedItems;