import React from 'react';
import './App.css';

function App() {
  const currentDate = new Date().toLocaleDateString();
  return (
    <div>
      <h1>Anjali Rathi</h1>
      <h2>{currentDate}</h2>
      <h3>{"Gautam Budha University".toUpperCase()}</h3>
    </div>
  );
}

export default App;
