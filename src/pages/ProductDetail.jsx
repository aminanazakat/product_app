import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaStar } from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  // Limit description to 200 chars
  const shortDesc =
    product.description.length > 200
      ? product.description.slice(0, 200) + "..."
      : product.description;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        background: "#fef0faff",
        color: "#ac3273",
        minHeight: "80vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Left side: Image */}
      <div style={{ flex: 1, minWidth: "300px", textAlign: "center" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            maxWidth: "100%",
            maxHeight: "400px",
            objectFit: "contain",
            borderRadius: "10px",
            
          }}
        />
      </div>

      {/* Right side: Info */}
      <div style={{ flex: 1, minWidth: "300px" }}>
        <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>{product.title}</h1>

        {/* Rating */}
        <div style={{ marginBottom: "15px" }}>
          {Array.from({ length: Math.round(product.rating.rate) }).map((_, i) => (
            <FaStar key={i} color="#f500c0ff" />
          ))}
          <span style={{ marginLeft: "10px", color: "#ac3273" }}>
            ({product.rating.count} reviews)
          </span>
        </div>

        <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>{shortDesc}</p>

        <p style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "20px" }}>
          ${product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#ac3273",
            border: "none",
            color: "#fff",
            padding: "12px 20px",
            fontSize: "16px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          <FaShoppingCart /> Add to Cart
        </button>

        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "20px",
            background: "none",
            border: "1px solid #ac3273",
            color: "#ac3273",
            padding: "10px 18px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
