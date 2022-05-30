import React from 'react';

const Input = ({ inputText, setInputText, tasks, setTasks }) => {
  //function for input text to be recognized
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTaskHandler = (e) => {
    e.preventDefault(); // to prevent window from being refreshed
    setTasks([...tasks, { text: inputText, completed: false }]);
    setInputText(''); //to rest state back to ""
  };

  return (
    <form>
      <input
        value={inputText} //for the UI to update along with the State
        onChange={inputTextHandler}
        type='text'
        className='todo-input'
      />
      <button onClick={submitTaskHandler} className='todo-button' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Input;
