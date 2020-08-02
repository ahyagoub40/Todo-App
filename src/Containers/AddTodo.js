import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <input ref={node => (input = node)} />
      <img src="images/add.png" alt="add" widht="20px" height="20px"
        onClick={(e) => dispatch(addTask(e.target.value))} />
    </div>
  )
}

export default connect()(AddTodo)