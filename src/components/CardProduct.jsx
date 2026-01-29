import { Link } from "react-router-dom";

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
      <Link to={"/products/4"}> Clicca qui!</Link>
    </div>
  );
}

export default Card;
