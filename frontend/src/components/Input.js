import React from 'react';

<<<<<<< HEAD
const Input = ({ inputText, setInputText, tasks, setTasks }) => {
  //function for input text to be recognized
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value); // for state to track what is being input
  };

  const submitTaskHandler = (e) => {
    e.preventDefault(); // to prevent window from being refreshed
    setTasks([
      ...tasks,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText(''); //to rest state back to ""
=======
const Input = ({ setInputText }) => {
  //function for input text to be recognized
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
>>>>>>> a07445a (Set up useState to track text input)
  };

  return (
    <form>
<<<<<<< HEAD
      <input
        value={inputText} //for the UI to update along with the State
        onChange={inputTextHandler}
        type='text'
        className='todo-input'
      />
      <button onClick={submitTaskHandler} className='todo-button' type='submit'>
=======
      <input onChange={inputTextHandler} type='text' className='todo-input' />
      <button className='todo-button' type='submit'>
>>>>>>> a07445a (Set up useState to track text input)
        Submit
      </button>
    </form>
  );
};

export default Input;
