const reducer = function (state = [], action) {
  const add = () => {
    return [...state, { id: action.id, text: action.text, completed: false }]
  }
  const toggle = () => {
    return state.map(task =>
      task.id === action.id ? { task, completed: !task.completed } : task)
  }
  const remove = () => {
    return state.filter(task =>
      task.id !== action.id)
  }
  const reducers = {
    ADD_TASK: add,
    TOGGLE_TASK: toggle,
    DELETE_TASK: remove,
    default: () => state
  }
  return (reducers[action.type] || reducers.default)()
}

export default reducer