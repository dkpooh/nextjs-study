import React from 'react';
import fetch from "isomorphic-unfetch";

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h1>{product.title}({product.id})</h1>
      <div>
        <span>{product.price}원</span>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {

  const res = await fetch('http://localhost:3030/products')
  const posts = await res.json()

  console.log(posts)

  const paths = posts.map(post => {
    return {
      params: { productId: post.id.toString() }

    }
  })

  console.log(paths)

  return {
    paths,
    fallback: false, // every page static ? false
  }
}

// runs once per company, in PROD
export const getStaticProps = async ({ params }) => {
  console.log(params)
  const res = await fetch(`http://localhost:3030/products/${params.productId}`)
  const product = await res.json()


  return { props: { product } }
}

export default ProductDetail;