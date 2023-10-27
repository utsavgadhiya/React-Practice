import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Fetch1() {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState({})
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                setLoading(false)
                setPost(res.data)
                setError('')
            })
            .catch(err => {
                setLoading(false)
                setPost({})
                setError(err)
            })
    }, [])

    return (
        <div>
            {loading ? 'Loading...' : post.title}
            {error ? error.message : null}
        </div>
    )
}

export default Fetch1