import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Filter from './components/Filter';
<<<<<<< HEAD
import TaskList from './components/TaskList';
=======
import Tasks from './components/Tasks';
>>>>>>> a07445a (Set up useState to track text input)

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
<<<<<<< HEAD
      <Input
        inputText={inputText}
        tasks={tasks}
        setTasks={setTasks}
        setInputText={setInputText}
      />
      <Filter />
      <TaskList setTasks={setTasks} tasks={tasks} />
>>>>>>> ac01b55a90787f1eac0c061ebd5b94feac42facd
=======
      <Input setInputText={setInputText} />
      <Filter />
      <Tasks setInputText={setInputText} />
>>>>>>> a07445a (Set up useState to track text input)
    </div>
  );
}

export default App;
