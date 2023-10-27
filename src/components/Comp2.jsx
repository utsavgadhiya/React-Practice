import React, { useContext } from 'react'
// import { CountContext } from '../App'

function Comp2() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Comp2 : {countContext.countState}
            <button onClick={() => countContext.countDispatch('inc')}>Increment</button>
            <button onClick={() => countContext.countDispatch('dec')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default Comp2