import React from 'react';
import './TodoButton.css'
import { TodoContext } from '../TodoContext/TodoContext';
function CreateTodoButton(){
  const {
    setOpenModal, 
    openModal,
  }= React.useContext(TodoContext)
    return(
       <div className='buttonContainer'>
         <button className='createButton' onClick={()=>{
          setOpenModal(!openModal)
         }}>Add</button>
       </div>
    )
}
export default CreateTodoButton;