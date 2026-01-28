import axios from "axios";
import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";

function CardWrapper() {
  const endpoint = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);

  function fetchProductsList() {
    axios
      .get(endpoint)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err))
      .finally(() => console.log("Chiamata terminata"));
  }

  useEffect(() => {
    fetchProductsList();
  }, []);

  return (
    <>
      <div className="products">
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
export default CardWrapper;
