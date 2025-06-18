import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Product = () => {

    /* useParams
        - url의 파라미터 정보를 가져올 수 있음
        - 물품/게시글의 고유번호/ID 값을 설정하는 데 적합함
        - 딱 한 가지 정보만 가져올 수 있음
        - 페이지를 구분하는 고유한 데이터로써 사용하는 것 추천!

        [사용방법]
        1. Route로 가서 <Route path = '경로:/파라미터정보' element = {컴포넌트}>
        2. import { useParams } from 'react-router-dom'
        3. let { 파라미터정보 } = useParams()
    */

    let { num } = useParams()

    /* useSearchParams
        - url에 ? 뒤쪽에 있는 쿼리값을 가져와서 사용
        - url의 글자 제한을 넘기지 않는 한 여러 쌍의 속성-값을 가져올 수 있음
    */

    const [query, setQuery] = useSearchParams()
    // console.log('query : ', query)
    // console.log('query : ', query.get('hot'))

    return (
        <div>
            {query.get('hot') == 'true' && <p style={{ color : 'red' }}>인기글</p>}
            {query.get('new') == 'true' && <p style={{ color : 'blue' }}>신규글</p>}
            Product {num}
        </div>
    )
}

export default Product