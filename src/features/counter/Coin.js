import React from 'react'
import { useSelector } from 'react-redux/es/exports';


export default function Coin() {
    const count = useSelector((state)=>state.counter.count)


    return (
      <div className="App">
       <span>{count}</span>
      </div>
    );
}
