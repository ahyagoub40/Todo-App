import React from 'react'
const Link = function (props) {
  console.log("link props : ", props)
  return (
    <button
      onClick={props.onClick}
      disabled={props.active}
    >
      {props.children}
    </button>
  )
}
export default Link