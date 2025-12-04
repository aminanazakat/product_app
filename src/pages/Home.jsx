
import ProductList from "../components/ProductList";
import bgHero from "../img/bg_hero.svg"; 
import girl from "../img/woman_hero.png";

export default function Home({ onSelect, onAdd }) {
  return (
    <>
      <section className="hero-section">
        {/* background image as an <img> (first child) */}
        <img src={bgHero} alt="Hero background" className="hero-bg" />

        {/* hero text content */}
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome To Our Store</h1>
            <p style={{ color: "#363033" }}>Our 50% sale is live!</p>
          </div>
        </div>

        {/* girl image (sliding in) */}
        <img src={girl} alt="Model" className="hero-girl" />
      </section>

      <ProductList onSelectProduct={onSelect} onAddToCart={onAdd} />
      
      <footer style={{
        width: "97%",
        padding: "30px 20px",
        height: "20px",
        backgroundColor: "#f9d2edff",
        display: "flex",
        marginTop: "60px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        borderTop: "1px solid #e0e0e0"
      }}>
        <p style={{ margin: "10px 0", fontSize: "16px", fontWeight: "500" }}>
          Developed by <span style={{ fontWeight: "bold", color: "#921076ff" }}>Amina Nazakat</span>
        </p>
        <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
