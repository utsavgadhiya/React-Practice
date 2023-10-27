import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
  const [post, setPost] = useState({});
  const [id, setID] = useState(1)
  const [idFromClick, setIDFromClick] = useState(1)

  const handleClick = () => {
    setIDFromClick(id)
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromClick]);

  return (
    <div>
      <input type="text" value={id} onChange={e => setID(e.target.value)}></input>
      <button type="button" onClick={handleClick}>Fetch Post</button>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
      <div>{post.title}</div>
    </div>
  );
}

export default FetchData;
