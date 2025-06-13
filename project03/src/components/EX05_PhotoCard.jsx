import React from 'react'

const EX05_PhotoCard = ({ item }) => {

    console.log(item)
    
    return (
        <div style = {{border : '1px solid black', padding : '20px'}}>
            <img height = '350px' src = {item.imgSrc}></img>
            <p>{item.title} {item.birthYear}년생</p>
            <p>{item.content}</p>
            <a href = {item.SNS}>Instagram</a>
        </div>
    )
}

export default EX05_PhotoCard