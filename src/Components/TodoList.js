import './TodoList.css'
function TodoList({children}){
    return(
        <ul className='containUl'>
            {children}
        </ul>
    )
}
export default TodoList