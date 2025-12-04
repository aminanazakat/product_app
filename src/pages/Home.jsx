
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
            <h1>Welcome to our store</h1>
            <p>Our 50% sale is live!</p>
          </div>
        </div>

        {/* girl image (sliding in) */}
        <img src={girl} alt="Model" className="hero-girl" />
      </section>

      <ProductList onSelectProduct={onSelect} onAddToCart={onAdd} />
    </>
  );
}
