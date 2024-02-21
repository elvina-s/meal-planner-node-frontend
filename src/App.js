import './index.css';
import Meals from './Meals';
import { useState, useEffect } from 'react'; 
import { getAllMeals, addMeal, deleteMeal, editMeal } from './FetchMeals'; 


function App() {
  const [meals, setMeals] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [mealId, setMealId] = useState("");

  useEffect(() => {
    getAllMeals(setMeals)
  }, [])

  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setMealId(_id)
  }

  return (
    <div className="App">
      <h1>Meal Plan</h1>

      <input
      type="text"
      placeholder="Enter a meal"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />

      <button 
      className='addBtn'
      disabled={!title}
      onClick=
      {editing ? () => editMeal(mealId, title, setTitle, setMeals, setEditing) : () => addMeal(title, setTitle, setMeals)}>
      {editing ? "Edit" : "Add"}
      </button>

      {
        meals.map((meal) => <Meals text={meal.title} key={meal._id} 
        updatingInInput={() => updatingInInput(meal._id, meal.title)}
        deleteMeal={() => deleteMeal(meal._id, setMeals)}
        />
      )}
    </div>
  );
}

export default App;
