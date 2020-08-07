import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Store/actions'
const AddTodo = () => {
  let input
  const dispatch = useDispatch()
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <input type="image" src="images/add.png" alt="Add Todo" width="20px" height="20px" />
      </form>
    </div>
  )
}


export default AddTodo