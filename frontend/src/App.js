import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import Filter from './components/Filter';

//  Connecting to database
const API_BASE = 'http://localhost:3001';

function App() {
  // State
  const [inputText, setInputText] = useState(''); //useState to track changes and render within input box
  const [tasks, setTasks] = useState([]);

  // useEffects
  useEffect(() => {
    GetTodos();
  }, []);

  // Functions
  // Function to fetch database
  const GetTodos = () => {
    // Fetching data
    fetch(API_BASE + '/todos')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        console.log(data);
      })
      .catch((err) => console.error('Error: ', err));
    console.log('Tasks');
    console.log(tasks);
  };

  // Add new task function for button
  const addTodo = async () => {
    const data = await fetch(API_BASE + '/todo/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: inputText,
      }),
    }).then((res) => res.json());
    setTasks([...tasks, data]);
    // Reseting value of input text to empty
    setInputText('');
  };

  return (
    <div className='App'>
      <h3>Your Tasks</h3>
      <Input
        inputText={inputText}
        tasks={tasks}
        setTasks={setTasks}
        setInputText={setInputText}
        addTodo={addTodo}
      />
      <Filter tasks={tasks} />
    </div>
  );
}

export default App;
