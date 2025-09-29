import { useState } from "react";
import { createProduct } from "../api/api";

export default function AddProductForm() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createProduct({ name, price, description })
            .then((res) => {
                alert(`Producto creado con ID: ${res.data.id}`);
                setName("");
                setPrice(0);
                setDescription("");
            })
            .catch((err) => alert("Error al crear el producto: " + err.message));
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <h2>Agregar Producto</h2>
            <div>
                <label>Nombre: </label>
                <input value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Precio: </label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    required
                />
            </div>
            <div>
                <label>Descripción: </label>
                <input value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <button type="submit" style={{ marginTop: "10px" }}>Agregar</button>
        </form>
    );
}
