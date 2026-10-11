

const Card = ({image , heading , title, content, price, btntext }) => {
  return (
    <div className="card-container">
      <div className="main">
        <h3>{image}</h3>
        <span>{heading}</span>
        <h1>{title}</h1>
        <p>{content}</p>
        <h5>{price}</h5>
        <button>{btntext}</button>
      </div>
    </div>

  )

}

export default Card

