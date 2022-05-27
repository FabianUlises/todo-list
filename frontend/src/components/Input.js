import React from 'react';

const Input = ({ setInputText }) => {
  //function for input text to be recognized
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  return (
    <form>
      <input onChange={inputTextHandler} type='text' className='todo-input' />
      <button className='todo-button' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Input;
