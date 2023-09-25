import '../styles/card.css'

export default function Card({ url, title, copyright, media, serviceVersion }) {
  return (
    <div className="card">
      <div className="space-image">
        <img src={url} alt={url} />

        <div className="title-copyright">
          <h1 className="title"> {title} </h1>

          <h2 className="copyright">{copyright}</h2>
        </div>
      </div>

      <div className="info">
        <p className="media"> {media} </p>
        <p className="serviceVersion">{serviceVersion}</p>
      </div>
    </div>
  )
}
