export default function SortDropdown({ value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}
     style=
     {{backgroundColor: "#f9dff1ff" ,
      border: "1px solid #ac3273",
       borderRadius: "5px",
        color: "#000",
        width: "150px",
        padding: "8px",
        
         }}>
      <option value="" >Sort price</option>
      <option value="low-high">Low → High</option>
      <option value="high-low">High → Low</option>
    </select>
  );
}
