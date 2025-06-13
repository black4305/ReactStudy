import React, { useState } from 'react'
import { ColorContext } from '../context/EX11_ColorContext'
import EX11_ColorList from '../components/EX11_ColorList'
import EX11_ColorResult from '../components/EX11_ColorResult'

const EX07_Context = () => {
    /* Context API
     * - APP 안에서 전역적으로 사용되는 데이터들을 여러 컴포넌트끼리 쉽게 공유할 수 있도록 지원하는 기술
     * 
     * Q. props 로도 데이터를 전달할 수 있는데 왜 굳이?
     * A. 깊숙히 위치한 컴포넌트에 데이터를 전달하는 경우에 여러 컴포넌트를 연달아서 props를 설정 -> 불편하고 실수가 잦음
     *    -> 이런 현상을 props drilling 이라고 함
     * 
     * Context 만드는 순서
     * 1. Context 파일을 만들어준다.
     * 2. Context 파일을 사용할 곳에 import 해준다.
     * 3. context를 provider로 감싸준다. 
     * 4. 하위 컴포넌트에서 useContext를 받아온다. 
     */

    // 전역적으로 사용할 state 선언
    // context에 데이터를 넣으려면 context 우선 선언
    const [color, setColor] = useState('blue')

    return (
        <ColorContext.Provider value = {{ color, setColor }}>
            <div>
                <h1>색상 변경하기</h1>
                <EX11_ColorList></EX11_ColorList>
                
                <hr/>

                <h1>선택한 색상</h1>
                <EX11_ColorResult></EX11_ColorResult>
            </div>
        </ColorContext.Provider>
    )
}

export default EX07_Context