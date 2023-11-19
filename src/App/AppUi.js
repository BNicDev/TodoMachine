import TodoCounter from '../Components/TodoCounter/TodoCounter';
import TodoSearch from '../Components/TodoSearch/TodoSearch';
import TodoList from '../Components/TodoList/TodoList';
import TodoItem from '../Components/TodoItem/TodoItems';
import CreateTodoButton from '../Components/TodoButton/CreateTodoButtton';

function AppUi({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){
    return (
        <>
          <TodoCounter
            completed={completedTodos}
            total={totalTodos} 
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
    
          <TodoList>
          {loading && <p>estamos cargando...</p>}
          {error && <p>desesperate hubo un error!</p>}
          {(!loading && searchedTodos.length===0 )&& <p>crea tu primer todo</p>}
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          
          <CreateTodoButton />
        </>
      );
}
export default AppUi;