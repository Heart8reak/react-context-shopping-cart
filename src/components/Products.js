import React, { useContext } from 'react'

//components
import Product from './Product'

//context
import ProductContext from '../context/ProductContext'

const Products = () => {
    const { products, addItem } = useContext(ProductContext)

    return (
        <div className="products-container">
            {products.map(product => (
                <Product key={product.id} product={product} addItem={addItem} />
            ))}
        </div>
    )
}

export default Products