import './TodoItem.css'
import{CompleteIcon} from './CompleteIcon'
import {DeleteIcon} from './DeleteIcon'
function TodoItem(props){
    return(
        <li className='containsLi'>
        <button className={`checkButton ${props.completed&&"checkButton-active" }`}onClick={props.onComplete}><CompleteIcon/></button>
        <p className={`parrafo ${props.completed&&'parrafo-active'}`}>{props.text}</p>
        <button className='nonButton' onClick={props.onDelete}><DeleteIcon/></button>
      </li>
    );
  }
  export default TodoItem;