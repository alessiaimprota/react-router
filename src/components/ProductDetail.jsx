import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const endpointDetail = "https://fakestoreapi.com/products";

function ProductDetail() {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${endpointDetail}/${id}`)
      .then((resp) => setDetails(resp.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>ciaoooo</h1>
      <p>prova {details.title}</p>
    </>
  );
}

export default ProductDetail;
