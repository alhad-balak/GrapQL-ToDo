import React from 'react'
import AddTodos from './AddTodos'

const Todo = () => {
    return (
        <div>
            <AddTodos onSubmit={addTodo} />
        </div>
    )
}

export default Todo