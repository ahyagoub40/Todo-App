import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setVisibilityFilter } from "../Store/actions";

const Link = function ({ filter, children }) {
  const active = useSelector(state => state.visbilityFilter)
  const dispacth = useDispatch()
  return (
    <button
      onClick={() => dispacth(setVisibilityFilter(filter))}
      disabled={active}
    >
      {children}
    </button>
  )
}

export default Link