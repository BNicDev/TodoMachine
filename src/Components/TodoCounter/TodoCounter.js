import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter(){
  const {completedTodos:completed, totalTodos:total} = React.useContext(TodoContext)
    return(
      total === completed ?
      <div className='counterContainer'>
      <h1>
        Felicitaciones!! Completaste todos los TODO'S 
    </h1>
  </div>

:

      <div className='counterContainer'>
          <h1>
            Has completado <br/> {completed} de {total} TODOS
        </h1>
      </div>
    )
}
export default TodoCounter;