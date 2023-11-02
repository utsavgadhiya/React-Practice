import React, { useState } from 'react'
import useDocTitle from './hooks/useDocTitle'

function DocTitle() {

    const [count, setCount] = useState(0)

    useDocTitle(count)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default DocTitle