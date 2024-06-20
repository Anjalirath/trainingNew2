import React from 'react';
import './App.css';
import Car from './components/Car';
import PlusMinus from './components/PlusMinus';

function App() {
  // const currentDate = new Date().toLocaleDateString();
  return (
    <div>
    <div>
      <PlusMinus/>
    </div>
    <Car color="Red" price="5Lac" />
    <Car color="Blue" />
      {/* <h1>Anjali Rathi</h1>
      <h2>{currentDate}</h2>
      <h3>{"Gautam Budha University".toUpperCase()}</h3> */}
    </div>
  );
}

export default App;
