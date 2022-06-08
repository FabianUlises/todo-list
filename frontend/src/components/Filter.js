import { React, useEffect, useState } from 'react';
import TaskList from './TaskList';

const Filter = ({ tasks, completedTasks }) => {
  const [filter, setFilter] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);

  // useEffect(() => {
  //   filterHandler();
  // });
  const filterToggle = (e) => {
    // console.log(e);
    setFilter(e.target.value); //track state of filter change
    // filterHandler(e.target.value);
  };

  const filterHandler = () => {
    console.log('Filter.js', tasks);
    switch (filter) {
      case 'completed':
        console.log('completed case');
        setFilteredTasks(tasks.filter((task) => task.complete === true));
        console.log(tasks.filter((task) => task.complete === true));
        break;
      case 'in-progress':
        console.log('in progress case');
        setFilteredTasks(tasks.filter((task) => task.complete === false));
        console.log(tasks.filter((task) => task.complete === false));
        break;
      default:
        console.log('all');
        setFilteredTasks(tasks);
        break;
    }
    console.log('filteredTasks', filteredTasks);
  };

  return (
    <div>
      <select onChange={filterToggle} className='filter'>
        <option value='all'>All</option>
        <option value='completed'>Complete</option>
        <option value='in-progress'>In Progress</option>
      </select>
      <TaskList filteredTasks={filteredTasks} />
    </div>
  );
};

export default Filter;
