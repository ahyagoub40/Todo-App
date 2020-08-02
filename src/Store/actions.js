let currentId = 0
export const addTask = function (text) {
  return { type: 'ADD_TASK', id: currentId++, text }
}

export const deletTask = function (id) {
  return { type: 'DELETE_TASK', id }
}

export const toggleTask = function (id) {
  return { type: 'TOGGLE_TASK', id }
}
