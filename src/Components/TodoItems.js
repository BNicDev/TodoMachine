import './TodoItem.css'
function TodoItems(props){
    return(
        <li className='containsLi'>
        <button className='checkButton'>✔</button>
        <p>{props.text}</p>
        <button className='nonButton'>X</button>
      </li>
    );
  }
  export default TodoItems;