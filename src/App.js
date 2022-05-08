import React, { useState, useEffect } from 'react'
import Todo from './components/Todo'
import "./App.css"

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then(response => response.json())
      .then(Data => setTodos(Data))
  }, [])
  // console.log(todos);
  return (
    <div className="todo-app">
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
