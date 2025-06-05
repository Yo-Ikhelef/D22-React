import React from 'react'
import './App.css'
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { increment, decrement, incrementByAmount} from "./counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);


    return (
    <>
        <div className={'container'}>

            <div className={'counter-div'}>
                <button onClick={() => dispatch(increment())}>+</button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <div className={'input-div'}>
                <input type="number"
                          value={inputValue}
                          onChange={(e) => setInputValue(Number(e.target.value))}
                          placeholder="Enter a number"

                />
                <button onClick={() => dispatch(incrementByAmount(inputValue))}>Add</button>
            </div>
        </div>
    </>
  )
}

export default App
