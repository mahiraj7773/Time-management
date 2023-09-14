export const addTask = (task) => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch({ type: 'ADD_TASK', payload: task });
      }, 500);
    };
  };
  
  export const updateTask = (updatedTask) => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch({ type: 'UPDATE_TASK', payload: updatedTask });
      }, 500);
    };
  };
  
  export const deleteTask = (taskId) => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch({ type: 'DELETE_TASK', payload: taskId });
      }, 500);
    };
  };
  export const selectTask = (task) => {
    return {
      type: 'SELECT_TASK',
      payload: task,
    };
  };