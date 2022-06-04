import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import Filter from './components/Filter';


//  Connecting to database
const API = 'http://localhost:3001';


function App() {
  // State
  const [inputText, setInputText] = useState(''); //useState to track changes and render within input box
  const [tasks, setTasks] = useState([]);

  // useEffects
  // Calling for api at page load
  useEffect(() => {
    // Function to get database
    getTodos();
  }, [])




  // Functions
  // Function to fetch database
  const getTodos = () => {
    // Fetching data
    fetch(API = "/todos")
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error('Error: ', err));
  };

  // Complete button
  const completeTask = async (id) => {
    console.log('complete task');
  };



  return (
    <div className='App'>
      <header>ToDo App!</header>
      <h3>Your Tasks</h3>
      <Input
        inputText={inputText}
        tasks={tasks}
        setTasks={setTasks}
        setInputText={setInputText}
      />
      <Filter tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;