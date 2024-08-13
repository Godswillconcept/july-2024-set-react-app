import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((response) => setPosts(response));
  };

  useEffect(() => fetchPost(), []);

  return (
    <ul className="list-unstyled">
      {posts.map((post, index) => (
        <li key={index}>
          <div className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <p className="card-text font=italic">{post.userId}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Posts;
