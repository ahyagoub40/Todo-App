
const todos = (state = [], action) => {
  const add = () => (
    [
      ...state,
      { id: action.id, text: action.text, completed: false }
    ]
  )
  const toggle = () => (
    state.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
  )
  const remove = () => (
    state.filter(todo => todo.id !== action.id)
  )
  const options = {
    ADD_TODO: add,
    TOGGLE_TODO: toggle,
    DELETE_TODO: remove,
    default: () => state
  }

  return (options[action.type] || options.default)()
}

export default todos