import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import ProductService from "../../../shared/data/product/ProductService";
import { useAuth } from "../../../shared/store/auth";

export default function List() {

    const { t } = useTranslation();
    const user = useAuth(state => state.user);
    const [ products, setProducts ] = useState<any>(null);

    useEffect(() => {
        ProductService.userIndex().then((data) => {
            setProducts(data);
        });

    },[]);


    return (
        <>
            <div className="flex w-full justify-between items-center mb-5">
                <div className="text-2xl font-semibold">Products</div>
                <NavLink to="/dashboard/product/create"
                className="px-4 py-2 rounded-md duration-150 cursor-pointer bg-blue-500 hover:bg-blue-300 text-white">
                    Create
                </NavLink>
            </div>


            <div>
                {products?.map((product: any) => (
                    <div className="flex justify-between bg-gray-300 rounded px-5 py-2 mb-3">
                        <div className="flex flex-col">
                            <div className="text-lg font-semibold">
                            {product?.title}
                            </div>
                            <div>
                            {product?.desc}
                            </div>
                        </div>

                        <div>
                            edit
                            delete
                        </div>

                    </div>
 
                ))}
            </div>
        </>
    );
}