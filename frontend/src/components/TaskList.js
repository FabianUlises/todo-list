import { React } from 'react';
import Task from './Task';

const TaskList = ({ tasks, setTasks, filteredTasks, completeTask, deleteTask }) => {
  return (
    <div className='container'>
      <ul className='Task-list'>
        {/* gain access to each task by mapping the array*/}
        {filteredTasks
          ? filteredTasks.map((task) => (
              <Task
                task={task}
                setTasks={setTasks}
                tasks={tasks}
                text={task.text}
                key={task.id}
                completeTask={completeTask}
                deleteTask={deleteTask}
              /> //render each Task Component by what's input
            ))
          : tasks.map((task) => (
              <Task
                task={task}
                setTasks={setTasks}
                tasks={tasks}
                text={task.text}
                key={task.id}
                completeTask={completeTask}
                deleteTask={deleteTask}
              /> //render each Task Component by what's input
            ))}
      </ul>
    </div>
  );
};

export default TaskList;
