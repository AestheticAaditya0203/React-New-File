import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './Actions/index'

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <h1>Welcome to React</h1>
        <h2>Increament/Decreament Counter</h2>
        <a className='quantity_minus' title='Decrement'><span><button onClick={() => dispatch(decNumber())} >-</button> </span></a>
        <input type='text' name='quantity' className='quantity_input' value={myState} />
        <a className='quantity_plus' title='Increment'><span><button onClick={() => dispatch(incNumber())}>+</button></span></a>
      </div>
    </>
  )
}

export default App