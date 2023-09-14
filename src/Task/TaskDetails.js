import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateTask, deleteTask } from '../../src/actions/taskactions';

function TaskDetails({ task, updateTask, deleteTask }) {
  const [status, setStatus] = useState(task?.status);

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    updateTask({ ...task, status: newStatus });
  };

  const handleDeleteClick = () => {
    deleteTask(task.id);
  };

  return (
    <div>
      <h2>Task Details</h2>
      <p>Title: {task.title}</p>
      <p>Description: {task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status:
        <select value={status} onChange={handleStatusChange}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </p>
      <button onClick={handleDeleteClick}>Delete Task</button>
    </div>
  );
}

export default connect(null, { updateTask, deleteTask })(TaskDetails);
