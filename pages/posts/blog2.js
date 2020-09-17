import fetch from 'isomorphic-unfetch'
import {useEffect, useState} from "react";

function Blog2() {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    fetch('http://localhost:3030/posts').then(response => {
      return response.json()
    }).then(json =>{
      setPosts(json)
    })
  }, [])
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}


export default Blog2