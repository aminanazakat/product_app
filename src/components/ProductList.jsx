import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import useProducts from "../hooks/useProducts";

export default function ProductList({ onSelectProduct }) {
  const { filtered, search, setSearch, sort, setSort } = useProducts();

  return (
    <div className="container">
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
    </div>
  );
}
