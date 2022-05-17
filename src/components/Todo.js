import React, { useState, useEffect } from 'react'
import AddTodos from './AddTodos'
import TodoList from './TodoList';
import "./Todo.css"
import { useMutation, gql } from '@apollo/client';


const CREATE_TODO = gql`
mutation createTODO($titleText: String!) {
    insert_todo(objects: {title: $titleText, completed: false}) {
        affected_rows
    }
}`

const UPDATE_TODO = gql`
mutation updateTODO($givenID: uuid!, $givenText: String!) {
  update_todo(where: {id: {_eq: $givenID}}, _set: {title: $givenText, completed: false}) {
    affected_rows
    
  }
}`

const STATUS_TODO = gql`
mutation statusTODO($givenID: uuid!, $givenStatus: Boolean) {
    update_todo(where: {id: {_eq: $givenID}}, _set: {completed: $givenStatus}) {
      affected_rows
    }
  }`


const DELETE_TODO = gql`
mutation deleteTODO($givenID: uuid!) {
  delete_todo(where: {id: {_eq: $givenID}}) {
    affected_rows
  }
}`

const Todo = ({ todos }) => {

    const [createTodo, { dataCreate, loadingCreate, errorCreate }] = useMutation(CREATE_TODO);
    const [deleteTodo, { dataDelete, loadingDelete, errorDelete }] = useMutation(DELETE_TODO);
    const [updateTodo, { dataUpdate, loadingUpdate, errorUpdate }] = useMutation(UPDATE_TODO);
    const [statusTodo, { dataStatus, loadingStatus, errorStatus }] = useMutation(STATUS_TODO);

    const addTodo = eventValue => {
        // console.log(typeof (eventValue), eventValue.title);
        if (!eventValue.title || /^\s*$/.test(eventValue.title)) {
            return
        }
        createTodo({ variables: { titleText: eventValue.title } });
        // window.location.reload();
    };

    const updateTodoItem = (todoId, newValue) => {
        if (!newValue.title || /^\s*$/.test(newValue.title)) {
            return
        }
        updateTodo({ variables: { givenID: todoId, givenText: newValue.title } })
        // window.location.reload();
    }
    const removeTodo = id => {
        deleteTodo({ variables: { givenID: id } })
        // window.location.reload();
    };

    const toCompleteTodo = id => {
        // console.log(id, typeof true);
        statusTodo({ variables: { givenID: id, givenStatus: true } });
        // window.location.reload();
    };

    const toInCompleteTodo = id => {
        // console.log(id);
        statusTodo({ variables: { givenID: id, givenStatus: false }});
        window.location.reload();
    };
    return (
        <div className="todo-context">
            <h1>Things to do Today.</h1>
            <AddTodos onSubmit={addTodo} />
            <TodoList todos={todos} toCompleteTodo={toCompleteTodo} toInCompleteTodo={toInCompleteTodo} removeTodo={removeTodo} updateTodoItem={updateTodoItem}/>
        </div>
    )
}

export default Todo