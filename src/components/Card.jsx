import '../styles/card.css'

export default function Card({
  picture,
  name,
  sciName,
  region,
  nationalAnimal,
}) {
  return (
    <div className="card">
      <div className="animal-image">
        <img src={picture} alt={picture} />
      </div>

      <div className="name-animal">
        <h1 className="title-name"> {name} </h1>

        <h2 className="scintific-name">{sciName}</h2>
      </div>

      <div className="info">
        <p className="region"> {region} </p>
        <p className="national">{nationalAnimal}</p>
      </div>
    </div>
  )
}
