import '../styles/nav.css'

export default function Navigation({ highScore, currentScore }) {
  return (
    <>
      <nav className="navigation-bar-container">
        <div className="logo">
          <h1>Galactic Recall</h1>
        </div>

        <div className="scores-container">
          <div className="high-score-container">
            <div className="high-score">
              <p>High-score </p>
            </div>
            <div className="score-board-high">
              <p>{highScore}</p>
            </div>
          </div>
          <div className="current-score-container">
            <div className="current-score">
              <p>Current-score </p>
            </div>
            <div className="score-board-current">
              <p>{currentScore}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
