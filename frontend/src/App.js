import React from 'react';
import './App.css';
import Input from './components/Input';
import Filter from './components/Filter';

function App() {
  return (
    <div className='App'>
      <header>ToDo App!</header>
      <Input />
      <Filter />
    </div>
  );
}

export default App;
