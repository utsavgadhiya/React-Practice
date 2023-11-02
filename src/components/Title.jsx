import React from 'react'

function Title() {
    console.log('Title')
    return (
        <div>useCallback</div>
    )
}

export default React.memo(Title)