import React, { useState } from 'react'

function CounterHooks() {

// UseState returns an array with two elements
// 1. reference to the piece of state
// 2. function that updates that piece of state
const [count, setCount] = useState(0);
// then destructure and grab both things out of that array

    return (
        <div>
            <h1>the count is: {count}</h1>
            <button onClick={() => setCount(count + 1)}>add 1</button>
        </div>
    )
}

export default CounterHooks;