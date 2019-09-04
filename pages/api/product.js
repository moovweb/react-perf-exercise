import { LoremIpsum } from 'lorem-ipsum'

const delay = 2000

export default function product(req, res) {
  res.setHeader('Content-Type', 'application/json')
  const id = req.query.id
  const name = `Shoe ${id}`

  setTimeout(() => {
    res.end(
      JSON.stringify({
        id,
        name,
        image: `https://via.placeholder.com/2600x3200/FF0000/FFFFFF?text=${encodeURIComponent(
          name
        )}`,
        price: '$35.00',
        description: generateDescription()
      })
    )
  }, delay)
}

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

function generateDescription() {
  return lorem.generateSentences(4)
}
