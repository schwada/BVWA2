import { NavLink } from "react-router-dom";

export default function List() {
    return (
        <>
            <div className="flex w-full justify-between items-center mb-5">
                <div className="text-2xl font-semibold">Products</div>
                <NavLink to="/dashboard/product/create"
                className="px-4 py-2 rounded-md duration-150 cursor-pointer bg-blue-500 hover:bg-blue-300 text-white">
                    Create
                </NavLink>
            </div>

        </>
    );
}