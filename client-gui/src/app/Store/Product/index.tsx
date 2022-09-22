export default function Product() {
    return (
        <div className="w-10/12 flex-col py-5 flex-1">
            <div className="flex py-24"> 
                <div>

                    <img alt="ecommerce" className="w-full h-64 object-cover object-center rounded-md" src="https://dummyimage.com/400x400"/>
                </div>
                <div className="lg:w-1/2 w-full flex flex-col px-10">
                    <div>
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">DAVID SCHWAM</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
                    </div>
                    <div className="flex">
                        <span className="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            
                            <span className="text-gray-600 ml-3">4 Reviews</span></span>

                    </div>
                    <p className="leading-relaxed mt-5">
                        Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
                    </p>
                    <hr className="my-5" />
                    <div className="flex justify-between items-center">
                        <div className="title-font font-medium text-2xl text-gray-900">58,- CZK</div>
                        <div className="px-4 py-2 flex items-center rounded-md duration-150 cursor-pointer bg-blue-500 hover:bg-blue-300 text-white">
                            Add to cart
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}