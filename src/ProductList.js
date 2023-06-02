function ProductList() {

    const products = [
        { id: 1, brand: 'Apple', model: 'Iphone 13', price: 80000.68, inStock: false, image: 'iphone13' },
        { id: 2, brand: 'Apple', model: 'Iphone 14', price: 120000.78, inStock: ture, image: 'iphone14' },
        { id: 3, brand: 'Apple', model: 'Iphone 15', price: 140000.88, inStock: true, image: 'iphone15' }];
    return <div className='m-3'>
        <h1 className='text-3xl text-gray-700'>Product List</h1>

        {
            products.map(product => <div className='max-w-md rounded-log p-2 text-gray-600 mb-3 border border-gray-300'>
                <h1 className='text-xl font-semibold'>{products.brand}{product.model}</h1>
                <img className='rounded-t-lg' src={products.image} width='300' height='300' alt='product-item'/>
                <b>${products.price}</b>
                <div>
                    In inStock
                    <input type='checkbox' checked={products.inStock} />
                </div>
                {
                    product.inSkock ?
                        <div className='flex'>
                            <button className='flex bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-400'>
                                Buy Now
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </button>
                            <button className='flex border boder-orange-500 py2 px4 rounded ml-2 hover:bg-orange-500 hover:text-white'>
                                Add to cart
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </button>
                            </div> 
                            : <span className='text-lg text-xl text-gray-400'>WE do not know when this product will be availabl</span>
                }
            </div>)
        }
    </div>
}

export default ProductList;