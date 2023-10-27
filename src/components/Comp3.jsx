import React, { useContext } from 'react'
// import { CountContext } from '../App'

function Comp3() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Comp3 : {countContext.countState}
            <button onClick={() => countContext.countDispatch('inc')}>Increment</button>
            <button onClick={() => countContext.countDispatch('dec')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default Comp3