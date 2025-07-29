// src/App.jsx

import { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    console.log([...todos, newTodo])
    setTodos([...todos, newTodo]);
  };

  
  return (
    <>
      <h1>To-do App</h1>
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos}/>
    </>
  );


};

export default App;
