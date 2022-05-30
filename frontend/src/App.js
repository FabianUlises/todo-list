import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Filter from './components/Filter';
import TaskList from './components/TaskList';

function App() {
  const [inputText, setInputText] = useState(''); //useState to track changes within input box
  const [tasks, setTasks] = useState([]);

  return (
    <div className='App'>
      <header>ToDo App!</header>
      <Input
        inputText={inputText}
        tasks={tasks}
        setTasks={setTasks}
        setInputText={setInputText}
      />
      <Filter />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
