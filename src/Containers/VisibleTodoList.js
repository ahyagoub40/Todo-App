import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../Store/actions'
import '../Components/styles.scss'
import getVisibleTodos from '../helper-functions'

const TodoList = () => {
  const todos = useSelector(state => getVisibleTodos(state.todos, state.visibilityFilter))
  const dispatch = useDispatch()

  return (
    < ul >
      {
        todos.map(todo => (
          <div key={todo.id} className="in-line">

            <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </ li>
            <img src="images/trash.png"
              width="20px" height="20px" alt="Delete" onClick={() => dispatch(deleteTodo(todo.id))} />
          </div>
        ))
      }
    </ul >
  )
}

export default TodoList