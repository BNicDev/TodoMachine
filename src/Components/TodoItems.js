import './TodoItem.css'
function TodoItems(props){
    return(
        <li className='containsLi'>
        <button className={`checkButton ${props.completed&&"checkButton-active" }`}>✔</button>
        <p className={`parrafo ${props.completed&&'parrafo-active'}`}>{props.text}</p>
        <button className='nonButton'>X</button>
      </li>
    );
  }
  export default TodoItems;