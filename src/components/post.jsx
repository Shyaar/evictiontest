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
            <h3>Post</h3>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorum nihil possimus quisquam optio, deserunt minima nisi sit autem laboriosam in neque omnis! Sequi ullam reiciendis commodi officiis porro repellat at aliquam saepe deserunt illum? Repudiandae culpa voluptatem id nam voluptas et, iure quis. Rem repellat consectetur nobis corporis dolore?</p>
            <hr />
            <div className='flex'>
                <button className='m-4'>bookmark</button>
            </div>
        </div>
    </div>
  )
}

export default Post
