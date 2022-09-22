import { lazy, Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../store/auth";

export function Lazy({path}: {path: string}) {
	const LazyElement = lazy(() => import(/* @vite-ignore */ '../../../app/' + path));
	return (
		<Suspense>
			<LazyElement></LazyElement>
		</Suspense>
	);
}

export function PublicRoutes() {
    const user = useAuth(state => state.user);
    return user ? <Navigate to="/"/> : <Outlet/>;
}

export function PrivateRoutes() {
    const user = useAuth(state => state.user);
    return user ? <Outlet/> : <Navigate to="/"/>;
}