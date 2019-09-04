import React from 'react'
import fetch from 'cross-fetch'

export default function Product({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <img style={styles.img} src={product.image} />
      <div style={styles.price}>{product.price}</div>
      <p style={styles.description}>{product.description}</p>
    </div>
  )
}

Product.getInitialProps = async ({ query }) => {
  return {
    product: await fetch(`http://localhost:3000/api/product?id=${query.productId}`).then(res =>
      res.json()
    )
  }
}

const styles = {
  img: {
    width: '100vw',
    margin: '0 0 0 -8px',
    height: 'calc(100vw * 32/26)',
    marginBottom: '20px'
  },
  price: {},
  description: {}
}
