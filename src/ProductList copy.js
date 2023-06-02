function ProductList() {

    const products = [
        { id: 1, brand: 'Apple', model: 'Iphone 13', price: 80000.68, inStock: false, image: 'iphone13' },
        { id: 2, brand: 'Apple', model: 'Iphone 14', price: 120000.78, inStock: ture, image: 'iphone14' },
        { id: 3, brand: 'Apple', model: 'Iphone 15', price: 140000.88, inStock: true, image: 'iphone15' }];
    return <div>
        <h1>Product List</h1>
        <table class='w-full text-left text-gray-500'>
            <thead classNamme='border-b uppercase'>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>InStock</th>
            </thead>
            <tbody>
                {
                    products.map(product => <tr class='border-b'>
                        <td><img alt='product' src={product.image} width='100' height='100' /></td>
                        <td>{product.brand}{product.model}</td>
                        <td>{product.price}</td>
                        <td>{product.inStock ? 'Yes' : 'No'}</td>
                    </tr>)
                }
            </tbody>
        </table>

        // {
        //     products.map(product => <div>
        //         <h1>{products.brand}{product.model}</h1>
        //         <img src={products.image} width='300' height='300' />
        //         <b>${products.price}</b>
        //         <div>
        //             In inStock
        //             <input type='checkbox' checked={products.inStock} />
        //         </div>
        //     </div>)
        //  }
    </div>
}

export default ProductList;