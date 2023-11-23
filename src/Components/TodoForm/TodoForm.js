import React from "react";
import './TodoForm.css'
import {TodoContext} from '../TodoContext/TodoContext'

function TodoForm(){
    const {addTodo,setOpenModal}= React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    const onCancel = (event)=>{
        setOpenModal(false)
    }
    const onChange = (event)=>{
        setNewTodoValue(event.target.value)
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu Nuevo TODO</label>
            <textarea placeholder="Ingrese la tarea" value={newTodoValue} onChange={onChange}/>
            <div className="TodoForm-buttonContainer">
                <button type="" className="TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
                <button type='' className="TodoForm-button--add">Agregar</button>
            </div>
        </form>
    )
}
export default TodoForm