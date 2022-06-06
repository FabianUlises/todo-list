import React from 'react';
//"text prop" to track what's been input by user
const Task = ({ text, task, tasks, setTasks }) => {
  //Button Events
  const deleteTask = () => {
    setTasks(tasks.filter((element) => element.id !== task.id));
  };

  const completeTask = () => {
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

  // const editTask = ({ task }) => {};

  return (
    <div className='task'>
      {/* ternary operator to toggle value between true and false */}
      {/* <button onClick={editTask}>
        <i>Edit</i>
      </button> */}
      <li className={`task-item ${task.completed ? 'completed' : ''}`}  class="completedTask">
        {text}
      </li>
      <button class='completeButton' onClick={completeTask}>
        <i>Complete</i>
      </button>
      <button class='deleteButton' onClick={deleteTask}>
        <i>Delete</i>
      </button>
    </div>
  );
};

export default Task;
