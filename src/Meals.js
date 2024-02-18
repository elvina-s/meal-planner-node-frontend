import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";

const Meals = ({ text, updatingInInput, deleteMeal }) => {
    return (
        <div>
            <p>{text}</p>
            <FiEdit3 onClick={updatingInInput}/>
            <MdOutlineDelete onClick={deleteMeal}/>
        </div>
    );
}

export default Meals;