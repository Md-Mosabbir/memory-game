import '../styles/gameover.css'

export default function GameOver({
  handleRetry,
  handleQuit,
  handlePlaying,
  condition,
}) {
  return (
    <div className="gameover-container">
      <div className="game-over-content">
        {!condition ? (
          <button className="retry" onClick={handleRetry}>
            Retry
          </button>
        ) : (
          <button className="keep-playing" onClick={handlePlaying}>
            Keep Playing
          </button>
        )}

        <button className="quit" onClick={handleQuit}>
          Quite Game
        </button>
      </div>
    </div>
  )
}
