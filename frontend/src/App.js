import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Filter from './components/Filter';
import Tasks from './components/Tasks';

function App() {
  const [inputText, setInputText] = useState(''); //useState to track changes within input box
  const [tasks, setTasks] = useState([]);

  return (
    <div className='App'>
      <header>ToDo App!</header>
      <Input setInputText={setInputText} />
      <Filter />
      <Tasks setInputText={setInputText} />
    </div>
  );
}

export default App;
