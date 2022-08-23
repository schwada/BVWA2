import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../store/auth";

export function PublicRoutes() {
    const user = useAuth(state => state.user);
    return user ? <Navigate to="/"/> : <Outlet/>;
}

export function PrivateRoutes() {
    const user = useAuth(state => state.user);
    return user ? <Outlet/> : <Navigate to="/"/>;
}