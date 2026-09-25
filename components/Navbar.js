export default function Navbar({ list }) {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f0f0f0", marginBottom: "20px" }}>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0 }}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}