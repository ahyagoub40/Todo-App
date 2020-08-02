import React from 'react'
import CheckBox from './checkBox'
import './styles.scss'
import { toggleTask } from '../Store/actions'
export default function Task({ text, completed }) {
  return (
    <div className="border">
      <div className='in-line'>
        <div className="sidebyside">
          <CheckBox checked={completed} toggleCheck={() => toggleTask()} />
          <p>{text}</p>
        </div>
        <div>
          <img src="images/trash.png" alt="Delete" width="20px" height="20px" />
        </div>
      </div>
    </div>
  )
}