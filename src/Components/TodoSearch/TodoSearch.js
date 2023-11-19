import './TodoSearch.css'
import React  from 'react';
function TodoSearch(props){
    return(
        <div className='inputContainer'>
            <input placeholder="Do Homework" value={props.state} className='in' onChange={(event)=>props.setSearchValue(event.target.value)}></input>
        </div>
    )
}
export default TodoSearch;