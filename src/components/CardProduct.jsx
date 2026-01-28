function Card({ product }) {
  const { image, title, description, price } = product;
  return (
    <div className="card">
      <img src={image} alt="picture" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        {" "}
        Il prezzo è: <span className="price">{price}$</span>
      </div>
    </div>
  );
}

export default Card;
