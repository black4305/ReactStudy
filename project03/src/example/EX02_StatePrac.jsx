import React, { useState } from 'react'
import srcImg from '../img/srcImg.jpeg'

const EX02_StatePrac = () => {

    const [emoji, setEmoji] = useState('🤍')
    const [like, setLike] = useState(0)

    const handleLike = () => {

        if(like === 0) {
            setLike(1)
            setEmoji('❤️')
        }
        else {
            setLike(0)
            setEmoji('🤍')
        }

    }

    return (
        <div>
            {/* 1. 외부 주소 활용 */}
            <img width = '500px' src = 'https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2020%2F09%2Ftesla-fastest-model-s-plaid-release-info-price-01.jpg'></img>
            
            {/* 2. src 폴더 활용 */}
            <img width = '500px' src = {srcImg}></img>

            {/* 3. public 폴더 활용 */}
            <img width = '500px' src = 'http://localhost:5173/publicImg.jpg'></img>

            <p>
                <span onClick={handleLike}>{emoji}</span>
                {" "}
                <span>좋아요 {like}개</span>
            </p>
        </div>
    )
}

export default EX02_StatePrac