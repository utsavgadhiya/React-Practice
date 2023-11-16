import React, { Suspense } from 'react'

const Admin = React.lazy(() => import('./NameList'))
const User = React.lazy(() => import('./Table'))

function LazyLoading({ user }) {
    return (
        
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                {user === 'admin' ? <Admin /> : <User />}
            </Suspense>
        </div>
    )
}

export default LazyLoading