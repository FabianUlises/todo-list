import React from 'react';

const Filter = () => {
  return (
    <div>
      <select className='filter'>
        <option value='all'>All</option>
        <option value='completed'>Complete</option>
        <option value='in-progress'>In Progress</option>
      </select>
    </div>
  );
};

export default Filter;
