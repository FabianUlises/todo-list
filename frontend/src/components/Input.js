import React from 'react';

const Input = () => {
  return (
    <form>
      <input type='text' className='todo-input' />
      <button className='todo-button' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Input;
