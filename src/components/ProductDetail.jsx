import { useParams } from "react-router-dom";
function ProductDetail() {
  const { id } = useParams();
  return (
    <>
      <h1>ciaoooo</h1>
      <p>prova {id}</p>
    </>
  );
}

export default ProductDetail;
