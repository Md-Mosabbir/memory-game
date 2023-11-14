import { useState } from 'react'
import '../styles/form.css'

export default function Form({ handleCount, handleStart }) {
  const [activeDifficulty, setActiveDifficulty] = useState(null)

  const handleDifficultyClick = (difficulty) => {
    setActiveDifficulty(difficulty)
    handleCount(difficulty) // Assuming handleCount takes difficulty as an argument
  }

  return (
    <div className="game-form-container">
      <div className="game-form">
        <h1>Galactic Recall</h1>

        <div className="difficulty-buttons">
          <button
            className={`difficulty ${
              activeDifficulty === 'easy' ? 'active' : ''
            }`}
            onClick={() => handleDifficultyClick('easy')}
          >
            Easy
          </button>
          <button
            className={`difficulty ${
              activeDifficulty === 'medium' ? 'active' : ''
            }`}
            onClick={() => handleDifficultyClick('medium')}
          >
            Medium
          </button>
          <button
            className={`difficulty ${
              activeDifficulty === 'hard' ? 'active' : ''
            }`}
            onClick={() => handleDifficultyClick('hard')}
          >
            Hard
          </button>
        </div>

        <button id="start" onClick={handleStart}>
          Start
        </button>
      </div>
    </div>
  )
}
