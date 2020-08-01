import React from 'react';
import './App.scss';
import NewTask from './Components/newTask'
import Task from './Components/Task'
function App() {
  return (
    <div>
      <div className="App">
        <NewTask />
        <Task />
      </div>
    </div>
  );
}

export default App;
