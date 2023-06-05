// container
// presentation
import ProductItem from './ProductItem';
import iphone13 from "./iphone13.jpg"
import iphone14 from "./iphone14.jpg"
import iphone15 from "./iphone15.jpg"


function ProductList() {
    const products = [
        { id: 1, brand: 'Apple', model: 'Iphone 13', price: 80000.68, inStock: false, image: iphone13 },
        { id: 2, brand: 'Apple', model: 'Iphone 14', price: 120000.78, inStock: true, image: iphone14 },
        { id: 3, brand: 'Apple', model: 'Iphone 15', price: 140000.88, inStock: true, image: iphone15 },
        // { id: 4, brand: 'Apple', model: 'Iphone 16', price: 160000.88, inStock: true, image: 'iphone16' }
    ];
    return <div className='m-4'>
        <h1 className='text-3xl text-gray-700'>Product List</h1>
        {products.map(product => <ProductItem key={product.id} product={product} />)}
    </div>
}
export default ProductList;