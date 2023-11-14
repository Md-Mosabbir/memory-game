import { useEffect, useState } from 'react'
import Card from './Card'
import { v4 as uuidv4 } from 'uuid'
import '../styles/planetapi.css'

export default function PlanetApi({
  planetData,
  setPlanetData,
  count,
  startFetching,
  handleCard,
}) {
  const API_KEY = 'Wlo2nXYr4KaNUFIhaQbhtxZLxRRF1LTPDMgIRp9H'
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (startFetching) {
      setLoading(true)

      fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${count.toString()}`
      )
        .then((response) => response.json())
        .then((data) => {
          const addId = data.map((card) => ({ ...card, id: uuidv4() }))
          setPlanetData(addId)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [startFetching, count, setPlanetData])

  return (
    <main className="main-game">
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {!loading &&
        planetData.map((card) => (
          <Card
            key={uuidv4()}
            id={card.id}
            url={card.url}
            title={card.title}
            copyright={card.copyright}
            media={card.media_type}
            serviceVersion={card.service_version}
            handleCard={handleCard}
          />
        ))}
    </main>
  )
}
