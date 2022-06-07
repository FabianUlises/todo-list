import { React, useState } from 'react';
import TaskList from './TaskList';


const Filter = ({ task, tasks, setTasks, deleteTask, completeTask }) => {
  const [filter, setFilter] = useState('all');
  const [filteredTasks, setFilteredTasks] = useState('');

  const filterToggle = (e) => {
    setFilter(e.target.value); //track state of filter change
    filterHandler(e.target.value);
  };

  const filterHandler = (status) => {
    console.log(status);
    switch (status) {
      case 'completed':
        setFilteredTasks(tasks.filter((task) => task.completed === true));
        break;
      case 'in-progress':
        setFilteredTasks(tasks.filter((task) => task.completed === false));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  };

  return (
    <div>
      <select setFilter={setFilter} onChange={filterToggle} className='filter'>
        <option value='all'>All</option>
        <option value='completed'>Complete</option>
        <option value='in-progress'>In Progress</option>
      </select>
      <TaskList
        filteredTasks={filteredTasks}
        setTasks={setTasks}
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
};

export default Filter;
