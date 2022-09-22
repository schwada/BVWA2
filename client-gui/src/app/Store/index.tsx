import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Product from "./Product";

export default function Store() {
    return (
        <Routes>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/*" element={<Navigate to="/"/>}/>
        </Routes>
    );
}