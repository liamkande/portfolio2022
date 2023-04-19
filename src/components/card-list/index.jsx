import Card from '../card'
import './card-list.styles.css'

const CardList = ({ products }) => (
  <div className="card-list">
    {products.map((product, index) => {
      return (
        <Card
          key={index}
          id={index}
          product={product}
          preview={() =>
            window.open(
              `${product?.previewLink}`,
              'popup',
              'width=1080,height=1080'
            )
          }
          viewCode={() =>
            window.open(
              `${product?.downloadLink}`,
              'popup',
              'width=1080,height=1080'
            )
          }
        />
      )
    })}
  </div>
)

export default CardList
