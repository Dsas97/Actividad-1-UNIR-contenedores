import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api", // url backend
});

export const getProducts = () => api.get("/products");
export const createProduct = (product: { name: string; price: number; description: string }) =>
    api.post("/products", product);
export const clearCart = () => api.delete("/products");

export default api;
