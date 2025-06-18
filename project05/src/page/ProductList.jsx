import React from 'react'
import ProductItem from '../components/ProductItem'

const ProductList = ({ list }) => {

    // console.log('list : ', list)

    return (
        <div className = 'center'>
            {list && list.map(item =>
                <ProductItem key = {item.no} item = {item}></ProductItem>
            )}
        </div>
    )
}

export default ProductList