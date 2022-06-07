import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import Filter from './components/Filter';

//  Connecting to database
const API_BASE = "http://localhost:3001";


function App() {
  // State
  const [inputText, setInputText] = useState(''); //useState to track changes and render within input box
  const [tasks, setTasks] = useState([]);

  



  // useEffects
  useEffect(() => {
    GetTodos();
  }, [])


  // Functions
  // Function to fetch database
  const GetTodos = () => {
    fetch(API_BASE + "/todos")
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.log(err))
  }




  // Complete function for button
  const completeTask = async (id) => {
    const data = await fetch(API_BASE + "/todo/complete/" + id)
      .then(res => res.json());

    setTasks(tasks => tasks.map(task => {
      if (task._id === data.id) {
        task.complete = data.complete;
      }
      return task;
    }))
  };

  // Delete function for button
  const deleteTask = async (id) => {
    const data = await fetch(API_BASE + '/todo/delete/' + id, {
      method: "DELETE"
    }).then(res => res.json());
    setTasks(tasks => tasks.filter(task => task._id !== data._id));
  }



  // Add new task function for button
  const addTodo = async () => {
    const data = await fetch(API_BASE + "/todo/new", {
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

      <h3>Your Tasks</h3>
      <Input
        inputText={inputText}
        tasks={tasks}
        setTasks={setTasks}
        setInputText={setInputText}
        addTodo={addTodo}
      />
      <Filter
        tasks={tasks}
        setTasks={setTasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
       />
    </div>

  );
}

export default App;

