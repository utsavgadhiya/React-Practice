import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state, action) => {
    switch (action) {
        case 'inc':
            return state + 1
        case 'dec':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterThree() {

    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count : {count}</div>
            <button onClick={() => dispatch('inc')}>Increment</button>
            <button onClick={() => dispatch('dec')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>

            <div>Count Two : {countTwo}</div>
            <button onClick={() => dispatchTwo('inc')}>Increment</button>
            <button onClick={() => dispatchTwo('dec')}>Decrement</button>
            <button onClick={() => dispatchTwo('reset')}>Reset</button>
        </div>
    )
}

export default CounterThree