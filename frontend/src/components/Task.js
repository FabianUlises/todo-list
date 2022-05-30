import React from 'react';
//"text prop" to track what's been input by user
const Task = ({ text, tasks, setTasks }) => {
  //Button Events

  return (
    <div className='task'>
      <li className='task-item'>{text}</li>
      <button>
        <i>Complete</i>
      </button>
      <button>
        <i>Delete</i>
      </button>
    </div>
  );
};

export default Task;
