import "./App.css";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddToDoForm";

function useSemiPersistentState(key, initialValue) {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem(key);
    return savedState ? JSON.parse(savedState) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}
function App() {
  const [todoList, setTodoList] = useSemiPersistentState("todoList", []);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
