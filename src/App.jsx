import { useState, useEffect } from 'react'

import Form from './components/Form'

import Navigation from './components/Navigation'
import PlanetApi from './components/PlanetApi'
import GameOver from './components/GameOver'

function App() {
  const [planetData, setPlanetData] = useState([])
  const [fetch, setFetch] = useState(false)
  const [startGame, setStartGame] = useState(true)
  const [count, setCount] = useState(0)
  const [currentGame, setCurrentGame] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [win, setWin] = useState(false)

  useEffect(() => {
    if (currentGame.length !== 0) {
      checkWin()
    }
  }, [checkWin, currentGame.length])

  function handleStart() {
    if (count !== '') {
      setFetch(true)
      setStartGame(false)
    }
  }

  function handleCount(e) {
    if (e.target.id === 'easy') {
      setCount(4)
    } else if (e.target.id === 'medium') {
      setCount(8)
    } else if (e.target.id === 'hard') {
      setCount(16)
    }
  }

  function checkWin() {
    if (planetData.length === currentGame.length) {
      setWin(true)

      setGameOver(true)
    } else {
      console.log(planetData.length, currentGame.length)
    }
  }
  function handlePlaying() {
    setCount(count + 1)
    setWin(false)
    setGameOver(false)
    setCurrentGame([])
  }

  function handleCard(e) {
    const clickedCard = e.currentTarget.id
    if (currentGame.includes(clickedCard)) {
      setGameOver(true)
      setFetch(false)
    } else {
      setCurrentGame((prevArray) => [...prevArray, clickedCard])
      setCurrentScore(currentScore + 1)

      setPlanetData(randomizeArray(planetData))

      if (currentScore >= highScore) {
        setHighScore(highScore + 1)
      }
    }
  }
  function randomizeArray(arr) {
    // Create a copy of the original array to avoid modifying it directly
    const shuffledArray = [...arr]

    // Use the Fisher-Yates shuffle algorithm to shuffle the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]
    }

    // Return the shuffled array
    return shuffledArray
  }
  function handleRetry() {
    setGameOver(false)
    setFetch(true)
    setCurrentScore(0)
    setCurrentGame([])
  }

  function handleQuit() {
    setGameOver(false)
    setStartGame(true)
    setCurrentScore(0)
    setCurrentGame([])
  }

  return (
    <>
      <Navigation highScore={highScore} currentScore={currentScore} />

      {startGame && (
        <Form handleCount={handleCount} handleStart={handleStart} />
      )}
      <PlanetApi
        planetData={planetData}
        setPlanetData={setPlanetData}
        count={count}
        startFetching={fetch}
        handleCard={handleCard}
      />

      {gameOver && (
        <GameOver
          handleQuit={handleQuit}
          handleRetry={handleRetry}
          handlePlaying={handlePlaying}
          condition={win}
        />
      )}
    </>
  )
}

export default App
