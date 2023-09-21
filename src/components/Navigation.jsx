import '../styles/nav.css'

export default function Navigation() {
  return (
    <>
      <nav className="navigation-bar-container">
        <div className="logo">
          <h1>I do remember</h1>
        </div>

        <div className="high-score-container">
          <div className="high-score">
            <p>High-score: </p>
          </div>
          <div className="score-board-high">
            <p>23</p>
          </div>
        </div>
        <div className="current-score-container">
          <div className="current-score">
            <p>Current-score: </p>
          </div>
          <div className="score-board-current">
            <p>23</p>
          </div>
        </div>
      </nav>
    </>
  )
}
