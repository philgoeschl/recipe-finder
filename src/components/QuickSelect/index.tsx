import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

interface QuickSelectLink {
    strArea: string;
}

interface QuickSelectProps {
    headline: string;
    items: QuickSelectLink[];
    queryType: string;
}

interface OnHandleClickProps {
    queryType: string;
    queryValue: string;
}

interface FetchRecipesProps {
    queryType: string;
    queryValue: string;
}

const fetchRecipes = async ({ queryType, queryValue }: FetchRecipesProps) => {
    // Using Test API Key -> https://www.themealdb.com/api.php
    const queryParam = `${queryType}=${queryValue}`;
    const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?${queryParam}`
    );
    const data = await res.json();
    const meals = data.meals || [];
    sessionStorage.setItem("lastSearchResults", JSON.stringify(meals));
    sessionStorage.setItem("lastSearchQuery", queryValue);
};

const QuickSelect = ({ headline, items, queryType }: QuickSelectProps) => {

    const navigate = useNavigate();
    const handleOnClick = async ({ queryType, queryValue }: OnHandleClickProps) => {
        // fetch filter with query type "c=" and query value "strArea"  -> value has other names for ingredients or categories
        // www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

        await fetchRecipes({ queryType, queryValue });
        navigate("/results");
    }


    return (
        <div className={styles.container}>
            <h2 className={styles.headline}>{headline}</h2>
            <div className={styles.links}>
                {items.map(({ strArea }) => {
                    return (
                        <button key={strArea} className={styles.button} onClick={() => handleOnClick({ queryType, queryValue: strArea })}>
                            {strArea}
                        </button>
                    )

                })}
            </div>
        </div>
    )
}

export default QuickSelect;