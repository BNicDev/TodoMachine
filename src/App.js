import TodoCounter from './Components/TodoCounter';
import TodoSearch from './Components/TodoSearch';
import TodoList from './Components/TodoList';
import TodoItems from './Components/TodoItems';
import CreateTodoButton from './Components/TodoButton/CreateTodoButtton';
import React from 'react';
import './App.css'

const defaultTodos = [
{text:'cortar cebolla', completed:true},
{text:'tomar curso intro react js', completed:false},
{text:'llorar con la llorona', completed:false},
{text:'cortar papa', completed:true},
// {text:'LALALAL', completed:true},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [state, setState] = React.useState('');
  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos = todos.length

  const searchedTodos = todos.filter(todo=>{
    const todoText = todo.text.toLowerCase()
    const searchText = state.toLowerCase()
    return( todoText.includes(searchText))
  })

  const completeTodo = (text)=>{
    const newTodos = [...todos];  
    const index = newTodos.findIndex((todo)=>todo.text === text)
    newTodos[index].completed=true;
    setTodos(newTodos)
  }
  const DeleteTodo = (text)=>{
    const newTodos = [...todos];  
    const index = newTodos.findIndex((todo)=>todo.text === text)
    newTodos.splice(index,1);
    setTodos(newTodos)
  }

  console.log('los usuariosn buscan todos' + state)
  return (
    <div className='appContainer'>
    <TodoCounter completed={completedTodos} total ={totalTodos}/>
     <TodoSearch state={state} setState={setState}/>
      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItems key={todo.text} text={todo.text} completed={todo.completed} onComplete={()=>completeTodo(todo.text)} onDelete={()=>DeleteTodo(todo.text)} />
        ))}
      </TodoList>
      <CreateTodoButton/>

    </div>
  );
}

export default App;
