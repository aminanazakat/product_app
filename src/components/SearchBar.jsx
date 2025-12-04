export default function SearchBar({ value, onChange }) {
  return (
    <input
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search"
       style=
     {{backgroundColor: "#f9dff1ff" ,
      border: "1px solid #ac3273",
       borderRadius: "5px",
        color: "#000",
        width: "250px",
        padding: "8px",
        
         }}
    />
  );
}
