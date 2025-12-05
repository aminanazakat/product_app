import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import useProducts from "../hooks/useProducts";

export default function ProductList({ onSelectProduct }) {
  const { filtered, search, setSearch, sort, setSort } = useProducts();

  return (
    <section className="container">
      <div style={{ fontSize: "34px", margin: "60px 0", color: "#2c292aff", display: "flex", justifyContent: "center" }}>
        Our Latest Products
      </div>
      <div className="filter-bar">
        <SearchBar value={search} onChange={setSearch} />
        <SortDropdown value={sort} onChange={setSort} />
      </div>

      <div className="grid">
        {filtered.map((p) => (
          <ProductItem
            key={p.id}
            product={p}
            onSelect={onSelectProduct}

          />
        ))}
      </div>
    </section>
  );
}
