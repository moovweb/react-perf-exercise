import React, { Component } from 'react'
import Link from 'next/link'

export default class ProductTile extends Component {
  render() {
    const { product } = this.props

    return (
      <div style={styles.root}>
        <Link as={`/product/${product.id}`} href={`/product/[productId]`}>
          <img style={styles.img} src={product.image} />
        </Link>
        {this.renderColorSwitcher()}
        <div style={styles.name}>{product.name}</div>
      </div>
    )
  }

  renderColorSwitcher() {
    const { product } = this.props

    return (
      <div style={styles.colorSwitcher}>
        {product.colors.map(color => (
          <div
            key={color}
            style={this.createSwatchBorderStyle(product, color)}
            onClick={this.onSwatchClick.bind(this, product, color)}
          >
            <div style={{ ...styles.swatch, backgroundColor: `#${color}` }} />
          </div>
        ))}
      </div>
    )
  }

  createSwatchBorderStyle(product, color) {
    const style = { ...styles.swatchBorder }

    if (product.selectedColor === color) {
      Object.assign(style, styles.selectedSwatchBorder)
    }

    return style
  }

  onSwatchClick = (product, color) => {
    this.props.changeProductColor(product, color)
  }
}

const styles = {
  root: {
    width: 'calc(50% - 8px)',
    display: 'inline-block',
    margin: '0px 8px 16px 0'
  },
  img: {
    display: 'block',
    maxWidth: '100%'
  },
  colorSwitcher: {
    margin: '10px 0'
  },
  swatch: {
    borderRadius: '50%',
    height: '100%',
    width: '100%'
  },
  swatchBorder: {
    padding: '2px',
    cursor: 'pointer',
    display: 'inline-block',
    margin: '0 5px 0 0',
    height: '32px',
    width: '32px',
    borderRadius: '50%',
    border: '2px solid transparent'
  },
  selectedSwatchBorder: {
    border: '2px solid #ccc'
  }
}
