import './TodoButton.css'
function CreateTodoButton(){
    return(
       <div className='buttonContainer'>
         <button className='createButton' onClick={(event)=>console.log('le diste click')}>Add</button>
       </div>
    )
}
export default CreateTodoButton;