import React, { useState, useMemo } from 'react'

function CounterFour() {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEvenOrOdd = useMemo(() => {
        let i = 0
        while (i < 999999999) i++
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count 1 : {counterOne}</button>
            </div>
            <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
            <div>
                <button onClick={incrementTwo}>Count 2 : {counterTwo}</button>
            </div>
        </div>
    )
}

export default CounterFour