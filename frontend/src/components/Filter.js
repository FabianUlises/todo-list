import { React, useEffect, useState } from 'react';
import TaskList from './TaskList';

const Filter = ({ tasks, toggleRender, setToggleRender }) => {
  const [filteredTasks, setFilteredTasks] = useState([]);

  const filterHandler = (e) => {
    if (e) {
      switch (e.target.value) {
        case 'completed':
          setFilteredTasks(tasks.filter((task) => task.complete === true));
          break;
        case 'in-progress':
          setFilteredTasks(tasks.filter((task) => task.complete === false));
          break;
        default:
          setFilteredTasks(tasks);
          break;
      }
    } else {
      setFilteredTasks(tasks);
    }
  };

  useEffect(() => {
    filterHandler();
  }, [tasks]);

  return (
    <div>
      <select id='filter' onChange={filterHandler} className='filter'>
        <option value='all'>All</option>
        <option value='completed'>Complete</option>
        <option value='in-progress'>In Progress</option>
      </select>
      <TaskList
        filteredTasks={filteredTasks}
        toggleRender={toggleRender}
        setToggleRender={setToggleRender}
      />
    </div>
  );
};

export default Filter;
