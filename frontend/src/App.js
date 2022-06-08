import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';

const API_BASE = 'http://localhost:3001';

function App() {
  const [inputText, setInputText] = useState(''); //useState to track changes and render within input box
  const [tasks, setTasks] = useState([]);
  // const [dataLoaded, setDataLoaded] = useState(false);
  const [toggleRender, setToggleRender] = useState(false);

  useEffect(() => {
    getTodos();
  }, [toggleRender]);

  const getTodos = () => {
    fetch(API_BASE + '/todos')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        console.log('Tasks:', tasks);
        // setDataLoaded(true);
      })
      .catch((err) => console.error('Error: ', err));
  };

  const addTodo = () => {
    fetch(API_BASE + '/todo/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: inputText,
      }),
    }).then((res) =>
      res.json().then((data) => {
        setInputText('');
        console.log(data);
        setTasks([...tasks, data]);
      })
    );
  };

  return (
    <div className='App'>
      <h3>Your Tasks</h3>
      <div>
        <input
          value={inputText} //for the state and UI to update
          onChange={(e) => setInputText(e.target.value)}
          type='text'
          className='todo-input'
        />
        <button onClick={addTodo} className='todo-button'>
          Submit
        </button>
      </div>
      {tasks.length > 0 ? (
        <Filter
          tasks={tasks}
          toggleRender={toggleRender}
          setToggleRender={setToggleRender}
        />
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default App;
