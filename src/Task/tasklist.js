import React from 'react';
import { connect } from 'react-redux';
import { selectTask } from '../../src/actions/taskactions';

function TaskList({ tasks, selectTask }) {
    return (
      <div>
        <h2>Task List</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} onClick={() => selectTask(task)}>
              {task.title} - Due: {task.dueDate} - Status: {task?.status}
            </li>
          ))}
        </ul>
      </div>
    );
  }

const mapStateToProps = (state) => ({
  tasks: state.taskReducer.tasks,
});

export default connect(mapStateToProps, { selectTask })(TaskList);
