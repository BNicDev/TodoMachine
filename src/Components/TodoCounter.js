import './TodoCounter.css'

function TodoCounter({total, completed}){
    return(
      <div className='counterContainer'>
          <h1>
            Has completado <br/> {completed} de {total} TODOS
        </h1>
      </div>
    )
}
export default TodoCounter;