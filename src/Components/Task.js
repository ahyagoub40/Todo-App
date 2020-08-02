import React from 'react'
import CheckBox from './checkBox'
import './styles.scss'
import { toggleTask, deletTask } from '../Store/actions'
export default function Task({ id, text, completed }) {
  return (
    <div className="border">
      <div className='in-line'>
        <div className="sidebyside">
          <CheckBox checked={completed} toggleCheck={() => toggleTask(id)} />
          <p>{text}</p>
        </div>
        <div>
          <img src="images/trash.png" alt="Delete" width="20px" height="20px"
            onClick={() => deletTask(id)} />
        </div>
      </div>
    </div>
  )
}