import React from 'react'
import CheckBox from './checkBox'
import './styles.scss'
export default function Task() {
  return (
    <div className='in-line'>
      <CheckBox checked={true} toggleCheck={false} />
      <p>task 1</p>
      <img src="images/trash.png" alt="Delete" width="20px" height="20px" />
    </div>
  )
}