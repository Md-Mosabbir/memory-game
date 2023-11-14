import '../styles/card.css'

export default function Card({
  id,
  url,
  title,
  copyright,
  media,
  serviceVersion,
  handleCard,
}) {
  return (
    <div className="card" onClick={handleCard} id={id}>
      <div className="space-image">
        {media === 'image' ? (
          <img src={url} alt={title} />
        ) : media === 'video' ? (
          <div className="video-container">
            <iframe
              title={title}
              width="100%"
              height="100%"
              src={url}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ) : null}

        <div className="title-copyright">
          <h1 className="title">{title}</h1>
          <h2 className="copyright">{copyright}</h2>
        </div>
      </div>

      <div className="info">
        <p className="media">{media}</p>
        <p className="serviceVersion">{serviceVersion}</p>
      </div>
    </div>
  )
}
