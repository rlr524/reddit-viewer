import React, { useEffect, useState } from "react";
import axios from "axios";

const Reddit = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then((res) => {
      const newPosts = res.data.data.children.map((obj) => obj.data);
      setPosts(newPosts);
    });
  }, []);

  return (
    <div>
      <h1>/r/reactjs</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={post.url} target="_blank" rel="noreferrer noopener">
              {post.title}
            </a>{" "}
            - {post.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reddit;
