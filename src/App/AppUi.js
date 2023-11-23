import TodoCounter from '../Components/TodoCounter/TodoCounter';
import TodoSearch from '../Components/TodoSearch/TodoSearch';
import TodoList from '../Components/TodoList/TodoList';
import TodoItem from '../Components/TodoItem/TodoItems';
import CreateTodoButton from '../Components/TodoButton/CreateTodoButtton';
import TodosError from '../Components/TodosError/TodosError';
import TodosLoading from '../Components/TodosLoading/TodosLoading';
import EmptyTodos from '../Components/EmptyTodos/EmptyTodos';
import { TodoContext } from '../Components/TodoContext/TodoContext';
import {Modal} from '../Components/Modal/Modal';
import TodoForm from '../Components/TodoForm/TodoForm';
import React from 'react';

function AppUi(){
  const {loading,
    error,
    searchedTodos,
    completeTodo,
    openModal,
    deleteTodo} = React.useContext(TodoContext)
    return (
        <>
          <TodoCounter/>
          <TodoSearch/>
              <TodoList>
              {loading && <TodosLoading/>}
              {error && <TodosError/>}
              {(!loading && searchedTodos.length===0 )&& <EmptyTodos/>}
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
          {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
        </>
      );
}
export default AppUi;