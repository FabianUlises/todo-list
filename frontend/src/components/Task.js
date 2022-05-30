import React from 'react';
//"text prop" to track what's been input by user
const Task = ({ text, task, tasks, setTasks }) => {
  //Button Events
  const deleteEvent = () => {
    setTasks(tasks.filter((element) => element.id !== task.id));
  };
  return (
    <div className='task'>
      <li className='task-item'>{text}</li>
      <button>
        <i>Complete</i>
      </button>
      <button onClick={deleteEvent}>
        <i>Delete</i>
      </button>
    </div>
  );
};

export default Task;
