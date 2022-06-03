import React, { useState, useEffect } from 'react';
// import Input from './components/Input';
// import Filter from './components/Filter';
// import TaskList from './components/TaskList';


const API = 'http://localhost:3000';

function App() {
  // State
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // useEffects
  useEffect(() => {
    GetTodos();
    console.log(todos)
  }, [])

  const GetTodos = () => {
    fetch(API + "/todos")
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error('Error: ', err));
  };

  // const [inputText, setInputText] = useState(''); //useState to track changes within input box
  // const [tasks, setTasks] = useState([]);

  return (
    <div className="container">
      <h1>Your Tasks</h1>

      <div className="todos-container">
        {todos.map(todo => (
          <div className="todo complete">
            <div className="checkbox"></div>
            <div className="text">{todo.text}</div>
            <div className="delete-todo">x</div>
          </div>
        ))}
      </div>
    </div>





















    // <div className='App'>
    //   <header>ToDo App!</header>
    //   <h3>Your Tasks</h3>
    //   <Input
    //     inputText={inputText}
    //     tasks={tasks}
    //     setTasks={setTasks}
    //     setInputText={setInputText}
    //   />
    //   <Filter />
    //   <TaskList setTasks={setTasks} tasks={tasks} />
    // </div>
  );
}

export default App;
