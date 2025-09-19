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
  const API_KEY = import.meta.env.VITE_NASA_API_KEY
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (startFetching) {
      setLoading(true)

      fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${count.toString()}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data, count)
          // add unique id to each card
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
  }, [startFetching, count, setPlanetData, API_KEY])

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
            key={card.id} // use the unique id you already generated
            data={card} // pass the whole card object
            handleCard={handleCard}
          />
        ))}
    </main>
  )
}
