import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../Store/actions'
import { VisibilityFilters } from '../Store/actions'
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
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