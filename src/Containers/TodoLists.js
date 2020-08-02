import { connect } from "react-redux";
import TodoList from '../Components/TaskLists'
import { toggleTask } from "../Store/actions";

const mapsStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTask(id))
})


export default connect(mapsStateToProps, mapDispatchToProps)(TodoList)