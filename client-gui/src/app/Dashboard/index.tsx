import { Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "../../shared/components/Routing";
import Product from "./Product";
import Home from "./Home";


export default function Dashboard() {
    return (
        <div className="flex-1 flex flex-col py-10">
            <div className="flex-1 flex">
                <div className="w-1/6">
                    <div>Dashboard</div>
                    <div>Product</div>
                </div>
                <div className="flex-1">
                    <Routes>
                        <Route element={<PrivateRoutes />}>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/product/*" element={<Product/>}/>
                        </Route>
                        <Route path="/*" element={<Navigate to="/"/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}