import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) return <h2>Your cart is empty</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          borderBottom: "1px solid #ddd",
          paddingBottom: "10px"
        }}>
          <img src={item.image} width={80} alt="" />
          <div style={{ marginLeft: "20px" }}>
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
