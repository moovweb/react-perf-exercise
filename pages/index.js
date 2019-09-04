import React, { useState } from 'react'
import fetch from 'cross-fetch'
import ProductTile from '../components/ProductTile'

export default function ProductListing({ initialProductListing }) {
  const [productListing, setProductListing] = useState(initialProductListing)

  function changeProductColor(product, color) {
    setProductListing({
      ...productListing,
      products: productListing.products.map(p => {
        if (p.id === product.id) {
          return {
            ...p,
            selectedColor: color,
            image: `https://via.placeholder.com/2600x2600/${color}/FFFFFF?text=${encodeURIComponent(
              p.name
            )}`
          }
        } else {
          return { ...p }
        }
      })
    })
  }

  if (!productListing) return null

  return (
    <div style={styles.root}>
      <h1>{productListing.name}</h1>
      <div style={styles.count}>{productListing.products.length} products</div>
      {productListing.products.map((product, i) => (
        <ProductTile key={i} product={product} changeProductColor={changeProductColor} />
      ))}
    </div>
  )
}

ProductListing.getInitialProps = async () => {
  return {
    initialProductListing: await fetch('http://localhost:3000/api/products').then(res => res.json())
  }
}

const styles = {
  root: {
    width: 'calc(100vw - 8px)'
  },
  count: {
    marginBottom: '1em'
  }
}
