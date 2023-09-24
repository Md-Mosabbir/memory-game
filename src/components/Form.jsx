export default function Form() {
  return (
    <div className="game-form">
      <h1>I Do Remember</h1>
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" id="name" />

      <div className="difficulty-buttons">
        <button className="difficulty">Easy</button>
        <button className="difficulty">Medium</button>
        <button className="difficulty">Hard</button>
      </div>

      <button id="start">Start</button>
    </div>
  )
}
