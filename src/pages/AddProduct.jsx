import { useState } from "react";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title,
        price,
        description: "Default description",
        image: "https://via.placeholder.com/150",
        category: "others"
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        alert("Product added!");
        console.log(data);
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Add New Product</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">Add Product</button>
    </form>
  );
}
