import React from 'react'
import FilterLink from '../Containers/filterLink'
import { VisibilityFilters } from '../Store/actions'
const footer = function () {
  return (
    <div>
      <span>Show: </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
  )
}

export default footer