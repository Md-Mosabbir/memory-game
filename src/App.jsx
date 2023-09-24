import Card from './components/Card'
import Form from './components/Form'
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <Card
        picture={'./assets/IMG_20190807_202937.jpg'}
        name="Shishkaton"
        sciName="Shishkaton"
        region="Shishkaton"
        nationalAnimal="Shishkaton"
      />
      <Card
        name="Shishkaton"
        sciName="Shishkaton"
        region="Shishkaton"
        nationalAnimal="Shishkaton"
      />
      <Card
        name="Shishkaton"
        sciName="Shishkaton"
        region="Shishkaton"
        nationalAnimal="Shishkaton"
      />
      <Form />
    </>
  )
}

export default App
