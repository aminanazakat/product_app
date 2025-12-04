export default function SortDropdown({ value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Sort price</option>
      <option value="low-high">Low → High</option>
      <option value="high-low">High → Low</option>
    </select>
  );
}
