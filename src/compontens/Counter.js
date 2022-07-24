import React from 'react'
import { useState } from 'react';
export default function Counter() {
    let [counter,setCounter] = useState(0);
    return (
      <div className="App">
       <button onClick={()=>{
        setCounter(counter++)
       }}>+</button>
       <span>{counter}</span>
       <button onClick={()=>{
        setCounter(counter--)
       }}>-</button>
      </div>
    );
}
