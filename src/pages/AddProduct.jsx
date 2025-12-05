import { useState } from "react";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !price || !description || !image) {
      alert("Please fill all fields!");
      return;
    }

    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title,
        price,
        description,
        image,
        category,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Product added!");
        console.log(data);
        // Reset form
        setTitle("");
        setPrice("");
        setDescription("");
        setCategory("");
        setImage("");
      });
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: "500px",
      margin: "20px auto",
      padding: "60px",
      color: "#ac3273",
      borderRadius: "15px",
      boxShadow: "0 4px 3px rgba(0,0,0,0.2)",
    },
    heading: {
      textAlign: "center",
      marginBottom: "25px",
    },
    input: {
      width: "100%",
      padding: "10px 12px",
      marginBottom: "15px",
      borderRadius: "8px",
      border: "1px solid #ac3273",
      outline: "none",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "12px",
      background: "#ac3273",
      color: "#fff",
      fontWeight: "bold",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.container}>
      <h2 style={styles.heading}>Add New Product</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />

      <input
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={styles.input}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={styles.input}
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={styles.input}
      />

      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        style={styles.input}
      />

      <button type="submit" style={styles.button}>
        Add Product
      </button>
    </form>
  );
}
