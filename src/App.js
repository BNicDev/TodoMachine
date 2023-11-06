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
{text:'cortar cebolla', completed:true},
{text:'llorar con la llorona', completed:false},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [state, setState] = React.useState('');
  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos = todos.length

  console.log('los usuariosn buscan todos' + state)
  return (
    <div className='appContainer'>
    <TodoCounter completed={completedTodos} total ={totalTodos}/>
     <TodoSearch state={state} setState={setState}/>
      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItems key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton/>

    </div>
  );
}

export default App;
