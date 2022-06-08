import React from 'react';
//"text prop" to track what's been input by user
const Task = ({ task, toggleRender, setToggleRender }) => {
  //Button Events
  const deleteTask = () => {
    console.log(task);
    fetch(`http://localhost:3001/todo/delete/${task._id}`, {
      method: 'DELETE',
    }).then(() => {
      setToggleRender(!toggleRender);
    });
  };

  const completeTask = () => {
    console.log(task);
    fetch(`http://localhost:3001/todo/complete/${task._id}`, {
      method: 'GET',
    }).then(() => {
      setToggleRender(!toggleRender);
    });
  };

  return (
    <div className='task'>
      <li className={'task-item ' + (task.complete ? 'completed' : '')}>
        {task.text}
      </li>
      <button
        className={'completeButton'}
        onClick={() => completeTask(task._id)}
      >
        <i>Complete</i>
      </button>
      <button
        onClick={() => {
          deleteTask();
        }}
        className={'deleteButton'}
      >
        <i>Delete</i>
      </button>
    </div>
  );
};

export default Task;
