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

  // Complete function for button
  const completeTask = async (id) => {
    // Test console log
    console.log('complete button was pressed!');
  };

  // Delete function for button
  const deleteTask = async (id) => {
    // Test console log
    console.log('delete button was pressed!');
    // const data = await fetch(API + '/todo/delete/' + id, {
    //   method: "DELETE"
    // }).then(res => res.json());
    // setTasks(tasks => tasks.filter(task => task._id !== data._id));
  }



  // Add new task function for button
  const addTodo = async () => {
    const data = await fetch(API + "/todo/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: inputText
      })
    }).then(res => res.json());
    setTasks([...tasks, data]);
    // Reseting value of input text to empty
    setInputText('')
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
      <Filter tasks={tasks} setTasks={setTasks} completeTask={completeTask} />
    </div>
  );
}

export default App;