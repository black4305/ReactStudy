import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {

    /* Link 태그
        - 웹페이지에서는 페이지를 이동할 때 a태그를 사용하지만, a태그는 클릭 시 새로운 페이지를 불러와서 이동하기 때문에 React의 SPA의 성격과 맞지 않음
        
        - Link Component를 이용해서 사용
        => History API를 통해 브라우저 주소와 경로만 바꾸는 기능이 내장되어 있음
        ⭐️ 필수 선행 기능 : BrowserRouter
    */


    return (
        <div>
            Main

            <hr/>

            <Link to = '/about'>about</Link>
        </div>
    )
}

export default Main