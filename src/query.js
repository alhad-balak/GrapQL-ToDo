import { gql } from 'graphql-tag'

const GET_TODOS = gql`
query getTODO {
    todo {
      id
      title
      completed
    }
  }`

const CREATE_TODO = gql`
  mutation createTODO($title: String) {
    insert_todo(objects: {title: $title, completed: false}) {
      affected_rows
    }
  }`
const UPDATE_TODO = gql`
  mutation updateTODO {
    update_todo(where: {id: {_eq: "8c47442e-cba2-43e8-8f61-b17216588b33"}}, _set: {title: "Lets Test", completed: false}) {
      affected_rows
    }
  }`

const DELETE_TODO = gql`
  mutation deleteTODO {
    delete_todo(where: {id: {_eq: "8c47442e-cba2-43e8-8f61-b17216588b33"}}) {
      affected_rows
    }
  }`


export default { GET_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO }



import { useMutation, gql } from '@apollo/client'



