import TodoCounter from './Components/TodoCounter';
import TodoSearch from './Components/TodoSearch';
import TodoList from './Components/TodoList';
import TodoItems from './Components/TodoItems';
import CreateTodoButton from './Components/TodoButton/CreateTodoButtton';
import './App.css'

const defaultTodos = [
{text:'cortar cebolla', completed:true},
{text:'tomar curso intro react js', completed:false},
{text:'llorar con la llorona', completed:false},

];

function App() {
  return (
    <div className='appContainer'>
    <TodoCounter completed={16} total ={25}/>
     <TodoSearch/>
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
