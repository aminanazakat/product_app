import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaPlusCircle, FaShoppingCart } from "react-icons/fa"; 

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        MyStore
      </Link>

      <div className="navbar-links">
        <Link to="/add" className="nav-icon" title="Add Product">
          <FaPlusCircle size={22} />
        </Link>

        <Link to="/cart" className="nav-icon" title="Cart">
          <FaShoppingCart size={22} />
          {cart.length > 0 && (
            <span className="cart-count">{cart.length}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}
