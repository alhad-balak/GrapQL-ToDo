import React, { useState, useEffect } from 'react'
import AddTodos from './AddTodos'
import TodoList from './TodoList';
import "./Todo.css"

const Todo = ({todos, setTodos}) => {
    const LOCAL_STORAGE_KEY = "react-do-list-todos";
    console.log(todos);
    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodos) {
            setTodos(storageTodos)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = todo => {
        if (!todo.title || /^\s*$/.test(todo.title)) {
            return
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        // console.log(...todos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.title || /^\s*$/.test(newValue.title)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        })
        setTodos(updatedTodos);
    };
    return (
        <div className="todo-context">
            <h1>Things to do Today.</h1>
            <AddTodos onSubmit={addTodo} />
            <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default Todo