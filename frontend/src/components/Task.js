import React from 'react';
//"text prop" to track what's been input by user
const Task = ({ text, task, tasks, setTasks }) => {
  //Button Events
  const deleteEvent = () => {
    setTasks(tasks.filter((element) => element.id !== task.id));
  };

  const completeEvent = () => {
    setTasks(
      tasks.map((el) => {
        //add if statement to change state value from falst to true
        if (el.id === task.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  return (
    <div className='task'>
      {/* ternary operator to toggle value between true and false */}
      <li className={`task-item ${task.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button onClick={completeEvent}>
        <i>Complete</i>
      </button>
      <button onClick={deleteEvent}>
        <i>Delete</i>
      </button>
    </div>
  );
};

export default Task;
