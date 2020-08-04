import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../Store/actions'
const getVisibleTodos = (todos, filter) => {

  const all = () => todos
  const completed = () => todos.filter(t => t.completed)
  const active = () => todos.filter(t => !t.completed)
  const options = {
    SHOW_ALL: all,
    SHOW_COMPLETED: completed,
    SHOW_ACTIVE: active,
    default: () => { throw new Error('Unknown filter: ' + filter) }
  }
  return (options[filter] || options.default)()
}
const TodoList = ({ todos, toggleTodo }) => {
  console.log('props : ', todos)
  return (
    < ul >
      {
        todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            {todo.text}
          </ li>
        ))
      }
    </ul >
  )
}
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)