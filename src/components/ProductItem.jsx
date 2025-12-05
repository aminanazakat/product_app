import { Link } from "react-router-dom";
import { FaEye, FaShoppingCart } from "react-icons/fa"; 
import { useCart } from "../context/CartContext";

export default function ProductItem({ product }) {
  const { addToCart } = useCart(); 

  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="p-img" />
      <h4>{product.title.slice(0, 115)}</h4>
      <p>${product.price}</p>

      <div className="card-icons">
        <Link to={`/product/${product.id}`} className="icon-btn">
          <FaEye /> 
        </Link>

        <button className="icon-btn" onClick={() => addToCart(product)}>
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
}
