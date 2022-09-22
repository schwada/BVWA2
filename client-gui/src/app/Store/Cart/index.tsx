import { useCart } from "../../../shared/store/cart";

export default function Cart() {

    const products =  useCart(state => state.items);

    return (
        <div className="flex">
            <div className="w-9/12 flex flex-col">
                <div className="py-5 flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-600">Cart</h2>
                    {products.map(product => (
                        <div className="py-5">
                            <div>{product.title}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-3/12 flex flex-col">
                <div className="py-5 flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-600">Summary</h2>
                </div>
            </div>

        </div>
    );
}