import '../styles/form.css'

export default function Form({ handleCount, handleStart }) {
  return (
    <div className="game-form-container">
      <div className="game-form">
        <h1>I Do Remember</h1>

        <div className="difficulty-buttons">
          <button className="difficulty" onClick={handleCount} id="easy">
            Easy
          </button>
          <button className="difficulty" onClick={handleCount} id="medium">
            Medium
          </button>
          <button className="difficulty" onClick={handleCount} id="hard">
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
