import React from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { incrementCounter,decrementCounter,incrementByNumber } from './counterSlice';

export default function Counter() {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch();

    return (
      <div className="App">
       <button onClick={()=>{
        dispatch(incrementCounter())
       
       }}>+</button>
       <span>{count}</span>
       <button onClick={()=>{
        dispatch(decrementCounter())      
       }}>-</button>
        <button onClick={()=>{
        dispatch(incrementByNumber(10))      
       }}>Increment By 10</button>
      </div>
    );
}
