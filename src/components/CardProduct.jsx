function Card({ product }) {
  const { image, title, description, price, rate } = product;
  return (
    <div className="card">
      <img src={image} alt="picture" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="price">{price}</div>
      <div className="rate">{rate}</div>
    </div>
  );
}

export default Card;
