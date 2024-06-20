import React, { useState } from 'react'



const PlusMinus=() =>{
    const [count, setCount] = useState(0);
    const handleCount = (value) => {
    setCount(count + value);
  };
  return (
    <div>
        <h2>Counter: {count}</h2>
     <div>
     <button onClick={() => handleCount(1)}>Plus 1</button>
     <button onClick={() => handleCount(5)}>Plus 5</button>
     <button onClick={() => handleCount(10)}>Plus 10</button>
     <button onClick={() => handleCount(15)}>Plus 15</button>
      <button onClick={() => handleCount(20)}>Plus 20</button>
      </div>
      <div>
        <button onClick={() => handleCount(-1)}>Minus 1</button>
         <button onClick={() => handleCount(-5)}>Minus 5</button>
          <button onClick={() => handleCount(-10)}>Minus 10</button>
           <button onClick={() => handleCount(-15)}>Minus 15</button>
            <button onClick={() => handleCount(-20)}>Minus 20</button>
            </div>
    </div>
  )
}

export default PlusMinus;
