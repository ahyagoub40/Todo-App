import React from 'react';
import './App.scss';
import AddTodo from './Containers/AddTodo';
import TodoList from './Containers/VisibleTodoList'
import Footer from './Components/footers'
function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
