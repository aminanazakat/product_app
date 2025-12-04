import { useCart } from "../context/CartContext";
import { FaTimes } from "react-icons/fa";

export default function CartPage({ isOpen, onClose }) {
  const { cart, removeFromCart } = useCart();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: isOpen ? 0 : "-100%",
        width: "350px",
        height: "100%",
        background: "#f9d2edff",
        color: "#fff",
        boxShadow: "-2px 0 8px rgba(0,0,0,0.5)",
        transition: "right 0.3s ease-in-out",
        zIndex: 1000,
        padding: "20px",
        overflowY: "auto",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ color: "#363033" }}>My Cart</h2>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: "#363033",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          <FaTimes />
        </button>
      </div>

      {/* Cart Items */}
      {cart.length === 0 ? (
        <p style={{ marginTop: "20px" }}>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
                paddingBottom: "10px",
                borderBottom: "1px solid #363033",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                width={60}
                height={60}
                style={{ objectFit: "cover", borderRadius: "5px" }}
              />
              <div style={{ marginLeft: "15px", flex: 1 }}>
                <h4 style={{ margin: 0, fontSize: "14px", color: "#ac3273" }}>{item.title}</h4>
                <p style={{ margin: "5px 0", fontSize: "14px", color: "#ac3273" }}>${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#ac3273",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
          ))}

          {/* Checkout */}
          <button
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "10px",
              background: "#ac3273",
              border: "none",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
