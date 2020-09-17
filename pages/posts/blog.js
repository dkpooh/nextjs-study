import fetch from 'isomorphic-unfetch'

function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3030/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Blog