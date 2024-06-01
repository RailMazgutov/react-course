import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";

const requestConfig = {};

export default function Meals() {
    const {data: loadedMeals, isLoading, error} = useHttp('http://localhost:3000/meals', requestConfig, []);


    return <ul id="meals">
        {loadedMeals && loadedMeals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
        ))}
    </ul>;
}