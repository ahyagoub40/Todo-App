import React from 'react';
import './App.css';
import NewTask from './Components/newTask'
import Task from './Components/Task'
function App() {
  return (
    <div className="App">
      <NewTask />
      <Task />
    </div>
  );
}

export default App;
