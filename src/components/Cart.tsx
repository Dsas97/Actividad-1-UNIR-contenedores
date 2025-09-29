import { useEffect, useState } from "react";
import { clearCart, getProducts } from "../api/api";

interface CartItem {
    id: number; 
    name: string; 
    price: number;
    description: string; 
}

export default function Cart() {
    const [items, setItems] = useState<CartItem[]>([]);

    const loadCart = () => {
        getProducts().then((res) => setItems(res.data));
    };

    useEffect(() => {
        loadCart();
    }, []);

    const handleClear = () => {
        clearCart().then(() => loadCart());
    };

    return (
        <div>
            <h2>Carrito</h2>
            {items.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <ul>
                    {items?.map((i) => (
                        <li key={i.id}>
                            {i.name} - ${i.price}
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={handleClear}>Vaciar Carrito</button>
        </div>
    );
}
