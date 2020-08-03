import { connect } from "react-redux";
import Link from '../Components/Link'
import { setVisibilityFilter } from "../Store/actions";
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visbilityFilter
})

const mapDispatchToProps = (dispacth, ownProps) => ({
  onClick: () => dispacth(setVisibilityFilter(ownProps.filter))
})
export default connect(mapStateToProps, mapDispatchToProps)(Link)