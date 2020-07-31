import React from 'react'
import CheckBox from './checkBox'
export default function Task() {
  return (
    <div>
      <img src="images/trash.png" alt="Delete" />
      <CheckBox checked={true} toggleCheck={false} />
      <p>task 1</p>
    </div>
  )
}