/**
 * An arbitrary time in ms to wait before sending the response used to
 * simulate a slow API
 */
const delay = 500

const numberOfProducts = 100

/**
 * Generates a fake product listing
 */
export default (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  const result = {
    name: 'Shoes',
    products: []
  }

  for (let i = 1; i <= numberOfProducts; i++) {
    const name = `Shoe ${i}`

    result.products.push({
      id: i.toString(),
      name,
      image: `https://via.placeholder.com/2600x2600/FF0000/FFFFFF?text=${encodeURIComponent(name)}`,
      selectedColor: 'ff0000',
      colors: ['ff0000', '00ff00', '0000ff']
    })
  }

  setTimeout(() => res.end(JSON.stringify(result)), delay)
}
