import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import "./index.css";

const Meals = ({ text, updatingInInput, deleteMeal }) => {
    return (
        <div className="Meals">
            <div className="aMeal">
                <p>{text}</p>
                <div className="buttons">
                    <FiEdit3 onClick={updatingInInput} className="icon first" />
                    <MdOutlineDelete onClick={deleteMeal} className="icon second" />
                </div>
            </div>
        </div>
    );
}

export default Meals;
