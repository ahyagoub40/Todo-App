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

export default getVisibleTodos