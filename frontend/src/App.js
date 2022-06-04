import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import Filter from './components/Filter';

function App() {
  const [inputText, setInputText] = useState(''); //useState to track changes and render within input box
  const [tasks, setTasks] = useState([]);

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
