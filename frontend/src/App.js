import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import Filter from './components/Filter';
import TaskList from './components/TaskList';

function App() {

  const [inputText, setInputText] = useState(''); //useState to track changes within input box
  const [tasks, setTasks] = useState([]);

  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        hello world
      </header>
=======
    <div className='App'>
      <header>ToDo App!</header>
      <h3>Your Tasks</h3>
      <Input
        inputText={inputText}
        tasks={tasks}
        setTasks={setTasks}
        setInputText={setInputText}
      />
      <Filter />
      <TaskList setTasks={setTasks} tasks={tasks} />
>>>>>>> ac01b55a90787f1eac0c061ebd5b94feac42facd
    </div>
  );
}

export default App;
