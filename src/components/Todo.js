import React, { useState, useEffect } from 'react'
import AddTodos from './AddTodos'
import TodoList from './TodoList';
import "./Todo.css"
import Alert from './Alert';

const Todo = ({ todos, setTodos }) => {
    const LOCAL_STORAGE_KEY = "react-do-list-todos";
    // console.log(todos);
    const [alert, setAlert] = useState(false);
    const [alertVis, setAlertVis] = useState(false)
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
    const [remID, setRemID] = useState(0);
    const removeTodo = id => {
        setAlertVis(true);
        setRemID(id);
        console.warn("Remove todo clicked.");
        // if (alert === true) {
        //     const removeArr = [...todos].filter(todo => todo.id !== id);
        //     setTodos(removeArr);
        //     console.warn("Alert!");
        // }

    };
    const removeTodoCompl = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    };


    const handleCancel = () => {
        setAlert(false);
        setAlertVis(false);
    }
    const handleOK = () => {
        setAlert(true);
        setAlertVis(false);
        const removeArr = [...todos].filter(todo => todo.id !== remID);
        setTodos(removeArr);
        console.warn("Alert!");
    }
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
            <Alert handleOK={handleOK} handleCancel={handleCancel} alertVis={alertVis} />
            <AddTodos onSubmit={addTodo}/>
            <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} removeTodoCompl={removeTodoCompl} setAlert={setAlert} />
        </div>
    )
}

export default Todo