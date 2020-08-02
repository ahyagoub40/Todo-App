import React from 'react'
import Task from './Task'


export default function TaskList({ todos, toggleTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <Task key={todo.id} {...todo} />
      ))}
    </div>
  )
}