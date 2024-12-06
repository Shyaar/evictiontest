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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, alias praesentium quibusdam magni id sequi itaque, excepturi dolorem delectus voluptas facere officiis vel quasi saepe numquam, necessitatibus dolores distinctio maxime velit. Est, officiis optio, accusantium ex, neque quasi totam incidunt dolorem amet adipisci sunt natus cum minus pariatur quos voluptatum!</p>
            <hr />
            <div className='flex'>
                <button className='m-4'>bookmark</button>
            </div>
        </div>
    </div>
  )
}

export default Post
