import React from 'react';
//"text prop" to track what's been input by user
const Task = ({ text, task, tasks, setTasks, completeTask }) => {
  //Button Events
  const deleteTask = () => {
    setTasks(tasks.filter((element) => element.id !== task.id));
  };

  //delete function
  const deleteButton = async (id) => {
    try {
      const deleteResult = await fetch(`/todo/delete/${id}`, {
        method: 'DELETE',
      });
      console.log(deleteResult);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  // const completeTask = () => {
  //   setTasks(
  //     tasks.map((el) => {
  //       //add if statement to change state value from falst to true
  //       if (el.id === task.id) {
  //         return {
  //           ...el,
  //           completed: !el.completed,
  //         };
  //       }
  //       return el;
  //     })
  //   );
  // };

  // const editTask = ({ task }) => {};
  console.log(task);
  return (
    <div className='task'>
      {/* ternary operator to toggle value between true and false */}
      {/* <button onClick={editTask}>
        <i>Edit</i>
      </button> */}
      <li className={`task-item ${task.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button
        onClick={() => {
          completeTask(task._id);
        }}
      >
        <i>Complete</i>
      </button>
      <button
        onClick={() => {
          deleteButton(task._id);
        }}
      >
        <i>Delete</i>
      </button>
    </div>
  );
};

export default Task;
