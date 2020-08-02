import React from 'react';
import { connect } from 'react-redux'
import './styles.scss'
import { addTask } from '../Store/actions'
function New({ dispatch }) {
  return (
    <div>
      <input type="text" name="new task" value="Enter a new task" />
      <img src="images/add.png" alt="add" widht="20px" height="20px"
        onClick={(e) => dispatch(addTask(e.target.value))} />
    </div>
  )
}

export default connect()(New)