import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductItem = ({ item }) => {

    // console.log('item : ', item)
    const nav = useNavigate()

    return (
        <div onClick = {() => {
            nav(`/detail/${item.no}`)
        }}
            className = 'product-container'
            style = {{ width : '200px', height : '300px'}}>

            <img width = '100px' src = {item.src}></img>
            <h3>{item.title}</h3>
            <p>{item.price}원</p>
        </div>
    )
}

export default ProductItem