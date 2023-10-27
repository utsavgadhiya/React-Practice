import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return { firstCounter: state.firstCounter + action.value }
        case 'dec':
            return { firstCounter: state.firstCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count : {count.firstCounter}</div>
            <button onClick={() => dispatch({ type: 'inc', value: 3 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'dec', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default CounterTwo