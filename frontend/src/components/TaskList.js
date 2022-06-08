import { React } from 'react';
import Task from './Task';

const TaskList = ({ filteredTasks, toggleRender, setToggleRender }) => {
  return (
    <div className='container'>
      <ul className='Task-list'>
        {filteredTasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            toggleRender={toggleRender}
            setToggleRender={setToggleRender}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
