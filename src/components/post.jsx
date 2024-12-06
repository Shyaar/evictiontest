import React from 'react'
import { useState } from 'react'


const Post = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    axios
      .get(url)
      .then((responses) => {
        setPostData(responses.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
        <div className="userData border rounded-md p-4 shadow-md">
            <h3></h3>
            <hr />
            <p>{postMessage}</p>
            <hr />
            <div className='flex'>
                <button className='m-4'>bookmark</button>
            </div>
        </div>
    </div>
  )
}

export default Post
