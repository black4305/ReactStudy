import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const ProductDetail = ({ list }) => {

    let {num} = useParams()

    let newList = []

    if(list) {
        // console.log('list :', list.filter(item => item.no == num))
        newList = list.filter(item => item.no == num)
    }

    return (
        <div className = 'center'>
            {list &&
                <div>
                    <h3>{newList[0].title}</h3>
                    <p>{newList[0].price}원</p>
                    <img width = '200px' src = {newList[0].src}></img>
                    <Link to = '/list'>목록</Link>
                </div>
            }
        </div>
    )
}

export default ProductDetail