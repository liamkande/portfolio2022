import './card.styles.css'

const Card = ({ product, id, preview, viewCode }) => {
  const { name, description, skills } = product

  function get_rand_color() {
    let colors = [
      'linear-gradient(180deg, rgba(255,255,255,0.81) 0%, rgba(33,182,168,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,0.81) 0%, rgba(85,158,162,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,0.81) 0%, rgba(85,158,162,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,0.81) 0%, rgba(209,155,100,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,0.81) 0%, rgba(207,115,139,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,0.81) 0%, rgba(194,138,239,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,0.81) 0%, rgba(206,235,251,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,0.81) 0%, rgba(238,50,51,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,0.81) 0%, rgba(231,183,199,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,0.81) 0%, rgba(255,189,137,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,0.81) 0%, rgba(205,179,214,1) 100%)',
    ]
    let color = colors[Math.floor(Math.random() * colors.length)]

    while (color.length < product.length + 1) {
      color = '0' + color
    }
    return color
  }

  return (
    <div
      className="card-container"
      style={{ backgroundImage: get_rand_color() }}
    >
      <img
        alt={`product ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        className="card-image"
      />
      <h2>{name}</h2>
      <h4 style={{ height: 40, marginTop: 0 }}>{skills}</h4>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <button onClick={preview} className="small-button">
          Preview App
        </button>
        <button onClick={viewCode} className="small-button">
          View Code
        </button>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default Card
