import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
            <Link to="/" style={{ marginRight: "20px", color: "white" }}>Comprar</Link>
            <Link to="/cart" style={{ color: "white" }}>Productos</Link>
        </nav>
    );
}
