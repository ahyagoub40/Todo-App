import React from 'react';
import './styles.scss'
export default function New() {
  return (
    <form className="input">
      <input type="text" name="new task" value="Enter a new task" />
      <img src="images/add.png" alt="add" widht="20px" height="20px" />
    </form>
  )
}
