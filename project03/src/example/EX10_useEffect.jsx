import React, { useEffect, useState } from 'react'

const EX10_useEffect = () => {

    /*
    useEffect()
        LifeCycle : React 컴포넌트의 생성부터 소멸까지 이르는 일련의 과정
        - 각 과정마다 특정 시점에 원하는 동작을 하도록 구현되어 있음
        -> 다만 classComponent에서만 사용할 수 있는 기능
        -> function component에서 쓸 수 있도록 만든 React hooks : useEffect
    */

    // 사용 : 변수, state, 함수 등 필요한 값들 초기화    
    console.log('1. 함수 초기화')
    const [num, setNum] = useState(0)

    // useEffect(함수, [])
    useEffect(() => {
        console.log('3. 화면이 마운트 되었습니다.')
    }, [])

    useEffect(() => {
        console.log('4. num이 변경되었습니다.')
    }, [num])
    
    return (
        <div>
            {console.log('2. return문 내부 - 화면 렌더링')}

            <h1>{num}</h1>
            <button onClick = {() => { setNum(num + 1) }}>+1</button>
        </div>
    )
}

export default EX10_useEffect