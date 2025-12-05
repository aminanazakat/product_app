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
      body: JSON.stringify({ title, price, description, image, category }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Product added!");
        setTitle("");
        setPrice("");
        setDescription("");
        setCategory("");
        setImage("");
      });
  };

  return (
    <div className="add-container">
      <form className="add-card" onSubmit={handleSubmit}>
        <h2>Add New Product</h2>

        <div className="grid">
          <div>
            <label>Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div>
            <label>Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="full">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label>Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div>
            <label>Image URL</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>

        {image && (
          <div className="preview">
            <img src={image} alt="preview" />
          </div>
        )}

        <button type="submit">Add Product</button>
      </form>

      <style>{`
        .add-container {
          display: flex;
          justify-content: center;
          padding: 40px;
        }

        .add-card {
          width: 600px;
          background: #fff;
          border-radius: 18px;
          padding: 35px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .add-card h2 {
          text-align: center;
          margin-bottom: 25px;
          color: #a62363;
        }

        label {
          font-weight: 600;
          margin-bottom: 6px;
          display: block;
          color: #a62363;
        }

        input,
        textarea {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #a62363;
          outline: none;
          margin-bottom: 15px;
          font-size: 15px;
          transition: 0.2s ease;
        }

        input:focus,
        textarea:focus {
          border-color: #d94789;
          box-shadow: 0 0 5px rgba(166,35,99,0.3);
        }

        textarea {
          height: 90px;
          resize: none;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .full {
          grid-column: span 2;
        }

        .preview {
          margin: 15px 0;
          text-align: center;
        }

        .preview img {
          width: 160px;
          height: 160px;
          object-fit: cover;
          border-radius: 15px;
          border: 2px solid #a62363;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        button {
          width: 100%;
          padding: 14px;
          background: #a62363;
          color: white;
          font-size: 17px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.2s ease;
          margin-top: 10px;
        }

        button:hover {
          background: #d94789;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}
