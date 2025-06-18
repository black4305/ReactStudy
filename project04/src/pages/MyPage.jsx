import React from 'react'
import { Link } from 'react-router-dom'

const MyPage = () => {
    return (
        <div>
            <h2>The letter I wrote</h2>

            <Link to = '/product/1?hot=true'>
                [1] 'I ate pizza today dinner.'
            </Link>
            <br/>
            <Link to = '/product/2?hot=true&new=true'>
                [2] 'I miss you. When can we meet?'
            </Link> 
            <br/>
            <Link to = '/product/3'>
                [3] 'What about this Sunday?'
            </Link>
        </div>
    )
}

export default MyPage