import { useEffect, useState } from "react";
import QuickSelect from "../QuickSelect";



const QuickSelectWrapper = () => {
    // const links = [{ title: "Eier", url: "123" }, { title: "Butter", url: "456" }, { title: "Karotten", url: "789" }]
    const query = "a=list";
    const [items, setSelectItems] = useState([]);

    const fetchData = async (query: string) => {
        // Using Test API Key -> https://www.themealdb.com/api.php
        const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/list.php?${query}`
        );
        const data = await res.json();
        const meals = data.meals || [];
        console.log('### meals', data);
        sessionStorage.setItem("a=list", JSON.stringify(meals));
        setSelectItems(meals);
    };



    useEffect(() => {
        console.log('### query', query);

        const loadFromSessionStorageOrFetch = (query: string) => {
            const dataFromSessionStorage = sessionStorage.getItem(query);
            if (dataFromSessionStorage) {
                const items = JSON.parse(dataFromSessionStorage);
                setSelectItems(items);
            } else {
                fetchData(query);
            }
        }

        loadFromSessionStorageOrFetch(query);
    }, [query]);

    return (
        <div>
            <QuickSelect headline={"Meals by area"} items={items} />
        </div>
    )
}

export default QuickSelectWrapper;