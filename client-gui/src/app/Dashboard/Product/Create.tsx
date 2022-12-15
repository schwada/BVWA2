import { useForm } from "react-hook-form";
import toast from "react-hot-toast/headless";
import {  useNavigate } from "react-router-dom";
import ProductService from "../../../shared/data/product/ProductService";

export default function Create() {

	const { register, handleSubmit, formState: { errors } } = useForm();
	const navigate = useNavigate();


	const create = (data: any) => {
		ProductService.create(data).then((resp) => {
            toast("created product", { duration: 3000, className: "toast-success"});
            navigate("/dashboard/product");
        }).catch(e => {
            toast("could not create", { duration: 5000, className: "toast-danger"});
        });
	};


	return (
		<div className="">
			<h2 className="text-2xl font-bold text-gray-600">Create product</h2>
		
		
			<form onSubmit={handleSubmit(create)} >
				
				<div className="relative w-full my-3">
					<input id="title" type="text" placeholder="title"
					className="peer h-12 px-4 w-full rounded-md border-2 border-gray-300 text-gray-900 placeholder-transparent
					focus:outline-none focus:border-sky-500" {...register("title", { required: true })} />
					<label htmlFor="title" className="absolute px-1 bg-white left-4 -top-2 text-gray-600 text-sm transition-all
						peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5
						peer-focus:-top-2 peer-focus:text-sky-500 peer-focus:text-sm">
						title
					</label>
					{errors.title && (
						<span className="text-xs text-red-500">This field is required</span>
					)}
				</div>
	 


	 
				<div className="relative w-full my-3">
					<textarea id="desc"  placeholder="description"
					className="peer h-32 resize-none py-2 px-4 w-full rounded-md border-2 border-gray-300 text-gray-900 placeholder-transparent
					focus:outline-none focus:border-sky-500" {...register("desc")} />
					
					<label htmlFor="desc" className="absolute px-1 bg-white left-4 -top-2 text-gray-600 text-sm transition-all
					 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5
					 peer-focus:-top-2 peer-focus:text-sky-500 peer-focus:text-sm">
						 description
					</label>
					
					{errors.desc && (
						<span className="text-xs text-red-500">This field is required</span>
					)}
				 </div>
	 
				<div className="relative w-full my-3">
					 <input id="price" type="number" placeholder="price"
					 className="peer h-12 px-4 w-full rounded-md border-2 border-gray-300 text-gray-900 placeholder-transparent
					 focus:outline-none focus:border-sky-500" {...register("price", { required: true })} />
					 <label htmlFor="price" className="absolute px-1 bg-white left-4 -top-2 text-gray-600 text-sm transition-all
					 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5
					 peer-focus:-top-2 peer-focus:text-sky-500 peer-focus:text-sm">
						price
					 </label>
					 {errors.price && (
						 <span className="text-xs text-red-500">This field is required</span>
					 )}
				 </div>
	
	 
	 
				 <button type="submit"
				 className="px-4 mt-3 py-2 w-full rounded-md duration-150 cursor-pointer bg-blue-500 hover:bg-blue-300 text-white">
					Create
				 </button>
	 

			 </form>
		
		
		</div>
	);
}