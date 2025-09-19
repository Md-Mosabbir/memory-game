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
      <div className="card-media">
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
      </div>

      <div className="card-content">
        <h2 className="title">{title}</h2>
        {copyright && <h4 className="copyright">© {copyright}</h4>}
        <p className="date">{date}</p>
        <p className="explanation">{explanation}</p>
        <div className="card-footer">
          <span className="media-type">{media_type}</span>
          <span className="service-version">{service_version}</span>
        </div>
      </div>
    </div>
  )
}
