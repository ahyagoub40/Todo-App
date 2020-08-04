import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  const setFilter = () => action.filter
  const options = {
    SET_VISIBILITY_FILTER: setFilter,
    default: () => state
  }

  return (options[action.type] || options.default)()
}

export default visibilityFilter