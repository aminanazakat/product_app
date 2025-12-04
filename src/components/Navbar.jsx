import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaPlusCircle, FaShoppingCart } from "react-icons/fa";
import CartPage from "../pages/CartPage";


export default function Navbar() {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          MyStore
        </Link>

        <div className="navbar-links">
          <Link to="/add" className="nav-icon" title="Add Product">
            <FaPlusCircle size={22} />
          </Link>

          <button
            onClick={() => setIsCartOpen(true)}
            className="nav-icon"
            title="Cart"
            style={{ position: "relative", background: "none", border: "none", cursor: "pointer" }}
          >
            <FaShoppingCart size={22} />
            {cart.length > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-3px",
                  right: "-5px",
                  background: "#ac3273",
                  color: "#fff",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartPage isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
