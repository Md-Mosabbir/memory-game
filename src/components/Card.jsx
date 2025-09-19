import '../styles/card.css'

export default function Card({ data, handleCard }) {
  const {
    date,
    title,
    url,
    hdurl,
    media_type,
    service_version,
    copyright,
    explanation,
  } = data

  return (
    <div className="card" onClick={handleCard} id={date}>
      <div className="space-image">
        {media_type === 'image' ? (
          <img src={hdurl || url} alt={title} className="planet-image" />
        ) : media_type === 'video' ? (
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
          <h2 className="title">{title}</h2>
          {copyright && <h3 className="copyright">© {copyright}</h3>}
        </div>
      </div>

      <div className="info">
        <p className="media"><strong>Type:</strong> {media_type}</p>
        <p className="serviceVersion"><strong>API Version:</strong> {service_version}</p>
        <p className="explanation">{explanation}</p>
      </div>
    </div>
  )
}
