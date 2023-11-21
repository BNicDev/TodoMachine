import { TodoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css'
import React  from 'react';
function TodoSearch(){
    const{setSearchValue, searchValue} = React.useContext(TodoContext)
    return(
        <div className='inputContainer'>
            <input placeholder="Do Homework" value={searchValue} className='in' onChange={(event)=>setSearchValue(event.target.value)}></input>
        </div>
    )
}
export default TodoSearch;