import React from 'react';
import './App.css';
import Tasklist from './Task/tasklist';
import CreateTaskForm from './Task/CreateTaskForm';
import TaskDetails from './Task/TaskDetails';

function App() {
  return (
    <div className="App">
      <h1>Task Management App</h1>
      <Tasklist />
      <CreateTaskForm />
      <TaskDetails />
    </div>
  );
}

export default App;
