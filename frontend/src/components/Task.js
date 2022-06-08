import React from 'react';
//"text prop" to track what's been input by user
const Task = ({ text, task }) => {
  //Button Events
  const deleteTask = () => {
    // setTasks(tasks.filter((element) => element.id !== task.id));
    console.log(task);
    const result = fetch(`http://localhost:3001/todo/delete/${task._id}`, {
      method: 'DELETE',
    }).then(() => {
      console.log('delete succesful');
    });
    console.log(result);
  };

  const completeTask = () => {
    // setTasks(tasks.filter((element) => element.id !== task.id));
    console.log(task);
    const result = fetch(`http://localhost:3001/todo/complete/${task._id}`, {
      method: 'PATCH',
    }).then(() => {
      console.log('complete succesful');
    });
    console.log(result);
  };
  //delete function
  // const deleteButton = async (id) => {
  //   try {
  //     const deleteResult = await fetch(`/todo/delete/${id}`, {
  //       method: 'DELETE',
  //     });
  //     console.log(deleteResult);
  //     setTasks(tasks.filter((task) => task._id !== id));
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

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

  return (
    <div className='task'>
      {/* ternary operator to toggle value between true and false */}
      {/* <button onClick={editTask}>
        <i>Edit</i>
      </button> */}
      <li className={'task-item ' + (task.complete ? 'completed' : '')}>
        {text}
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
