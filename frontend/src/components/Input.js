import React from 'react';

const Input = ({ inputText, setInputText, tasks, setTasks, addTodo }) => {
  //function for input text to be recognized
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value); // for state to track what is being input
  };

  // const submitTaskHandler = (e) => {
  //   e.preventDefault(); // to prevent window from being refreshed
  //   setTasks([
  //     ...tasks,
  //     { text: inputText, completed: false, id: Math.random() * 1000 },
  //   ]);
  //   setInputText(''); //to reset state back to ""
  // };

  return (
    <form>
      <input
        value={inputText} //for the UI to update along with the State
        onChange={inputTextHandler}
        type='text'
        className='todo-input'
      />
      <button onClick={addTodo} className='todo-button' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Input;
