import React from 'react'
import data from '../EX05_data.json'
import EX05_PhotoCard from '../components/EX05_PhotoCard'

const EX05_MapPrac = () => {
    console.log('데이터 :', data)

    // 1. 가지고 온 데이터를 분석해서 배열 찾기 -> map 사용하기 위함
    let photoList = data.result

    // 2. 찾은 배열을 이용해서 map 함수로 컴포넌트를 렌더링 (EX05_PhotoCard.jsx)

    // 3. PhotoCard 안에 들어갈 내용을 prop로 전달

    // 4. key 값에 관련된 오류 해결

    // 5. 디자인은 고민 X

    return (
        <div>
            <h1>MAP 실습</h1>

            <div style = {{display : 'flex'}}>
                {photoList.map(
                    item => <EX05_PhotoCard key = {item.title} item = {item}></EX05_PhotoCard>
                )}
            </div>
        </div>
    )
}

export default EX05_MapPrac