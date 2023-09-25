import { useState } from 'react'

import Form from './components/Form'

import Navigation from './components/Navigation'
import PlanetApi from './components/AnimalApi'

function App() {
  const [planetData, setPlanetData] = useState([])

  return (
    <>
      <Navigation />

      <Form />
      <PlanetApi planetData={planetData} setPlanetData={setPlanetData} />
    </>
  )
}

export default App
