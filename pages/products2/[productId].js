import React, {useState, useEffect} from 'react';
import fetch from "isomorphic-unfetch";

const ProductDetail = ({ product }) => {
  const [price, setPrice] = useState('')

  useEffect(() => {
    async function fetchData() {
      const responseData = await fetch(`http://localhost:3030/prices/${product.id}`)
      const { price } = await responseData.json()
      setPrice(price)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>{product.title}</h1>
      <div>
        <span>{price}원</span>
      </div>
    </div>
  );
};

const delay = async (delay) => {
  return new Promise(resolve => {
    setTimeout(() => {resolve(true)}, delay)
  })
}

// runs once per company, in PROD
export const getServerSideProps = async ({ params, res }) => {

  const { productId } = params
  const responseData = await fetch(`http://localhost:3030/products/${productId}`)

  const product = await responseData.json()

  if(!Object.keys(product).length) {
    //2초정도 걸리는 작업 있음
    await delay(2000)
    res.writeHead(301, { Location: '/'})
    res.end()
  }


  return { props: { product } }
}

export default ProductDetail;