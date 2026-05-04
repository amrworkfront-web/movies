import React from 'react'
import { useCounter } from '../store/useCounter';

export default function Test() {
    const {count, increment, decrement, reset} = useCounter();
  return (
    <div>
        <h1>Count: {count}</h1>
        <button className=' bg-blue-600 p-4 rounded-xl m-2' onClick={increment}>Increment</button>
        <button className=' bg-red-600 p-4 rounded-xl m-2' onClick={decrement}>Decrement</button>
        <button className=' bg-green-600 p-4 rounded-xl m-2' onClick={reset}>Reset</button>
    </div>
  )
}
