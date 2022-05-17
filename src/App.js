import React, { useState, useEffect } from 'react'
import Todo from './components/Todo'
import "./App.css"
import UseGetTODO from "./graphql/GetTodo.js";

const App = () => {
  const { error, loading, data } = UseGetTODO();
  console.log(error, loading, data?.todo);


  return (
    <div className="todo-app">
      {loading ? "Loading...." : <Todo todos={data?.todo} />}
    </div>

  )
}

export default App
