import { Navigate, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Edit from "./Edit";
import List from "./List";

export default function Product() {
    return (
        <Routes>
            <Route path="/" element={<List/>}/>
            <Route path="/:uuid" element={<Edit/>}/>
            <Route path="/create" element={<Create/>}/>
			<Route path="/*" element={<Navigate to="/"/>}/>
		</Routes>
    );
}