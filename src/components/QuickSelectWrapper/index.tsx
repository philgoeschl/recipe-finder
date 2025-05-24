import { useEffect, useState } from "react";
import QuickSelect from "../QuickSelect";

interface QuickSelectWrapperProps {
    query: string;
}

const QuickSelectWrapper = ({ query }: QuickSelectWrapperProps) => {
    // const links = [{ title: "Eier", url: "123" }, { title: "Butter", url: "456" }, { title: "Karotten", url: "789" }]
    const [items, setSelectItems] = useState([]);
    const queryType = query.split("=")[0];

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
            <QuickSelect headline={"Meals by area"} items={items} queryType={queryType} />
        </div>
    )
}

export default QuickSelectWrapper;