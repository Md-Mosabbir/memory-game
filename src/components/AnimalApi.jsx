import { useEffect } from 'react'
import Card from './Card'
import { v4 as uuidv4 } from 'uuid'
import '../styles/animalapi.css'

export default function PlanetApi({ planetData, setPlanetData }) {
  useEffect(() => {
    const API_KEY = 'Wlo2nXYr4KaNUFIhaQbhtxZLxRRF1LTPDMgIRp9H'

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=4`)
      .then((response) => response.json())
      .then((data) => {
        setPlanetData(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])

  // Log planetData whenever it changes
  useEffect(() => {
    console.log(planetData)
  }, [planetData])

  return (
    <main className="main-game">
      {planetData.map((card) => (
        <Card
          key={uuidv4()}
          url={card.url}
          title={card.title}
          copyright={card.copyright}
          media={card.media_type}
          serviceVersion={card.service_version}
        />
      ))}
    </main>
  )
}
