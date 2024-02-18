import axios from "axios";

const getAllMeals = (setMeal) => {
    axios.get(`https://render.com/docs/web-services#port-detection`)
    .then(({data}) => {console.log(data)
        setMeal(data)
    })
}

const addMeal = (title, setTitle, setMeal) => {
    axios.post(`https://render.com/docs/web-services#port-detection/saveMeals`, { title })
    .then((data) => {
        console.log(data)
        setTitle("")
        getAllMeals(setMeal)
    })
}

const editMeal = (mealId, title, setTitle, setMeal, setEditing) => {
    axios.post(`https://render.com/docs/web-services#port-detection/editMeal`, { _id: mealId, title })
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllMeals(setMeal)
    })
}

const deleteMeal = (_id, setMeal) => {
    axios.post(`https://render.com/docs/web-services#port-detection/deleteMeal`, { _id })
    .then((data) => {
        console.log(data)
        getAllMeals(setMeal)
    })
}

export { getAllMeals, addMeal, deleteMeal, editMeal};
