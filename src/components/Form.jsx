import '../styles/form.css'

export default function Form() {
  return (
    <div className="game-form-container" style={{ display: 'none' }}>
      <div className="game-form">
        <h1>I Do Remember</h1>

        <div className="input-name">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" />
        </div>

        <div className="difficulty-buttons">
          <button className="difficulty">Easy</button>
          <button className="difficulty">Medium</button>
          <button className="difficulty">Hard</button>
        </div>

        <button id="start">Start</button>
      </div>
    </div>
  )
}
