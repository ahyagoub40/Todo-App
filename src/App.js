import React from 'react';
import './App.scss';
import NewTask from './Components/newTask'
import TaskList from './Components/TaskLists'
function App() {
  return (
    <div>
      <div className="App">
        <NewTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
