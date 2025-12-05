
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
            <p>Our 50% sale is live!</p>
          </div>
        </div>

        {/* girl image (sliding in) */}
        <img src={girl} alt="Model" className="hero-girl" />
      </section>


       <section className="product-section"> 
       <ProductList onSelectProduct={onSelect} onAddToCart={onAdd} />
       </section>
     
      

      <footer className="footer">
        <p className="site-credits">
          Developed by <span style={{ fontWeight: "bold", color: "#921076ff" }}>Amina Nazakat</span>
        </p>
        <p className= "Copyright">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
