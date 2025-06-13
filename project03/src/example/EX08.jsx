import React, { useState } from 'react'
import EX08_Header from '../components/EX08_Header'
import EX08_Content from '../components/EX08_Content'
import EX08_Footer from '../components/EX08_Footer'
import '../EX08.css'
import { ThemeContext } from '../context/EX12_ThemeContext'

const EX08 = () => {

    /* 1. 우리의 목적 : 모드 변경
     * - isDark라는 이름의 state (True/False)
     * 
     * 2. context 폴더에 EX12_ThemeContext 라는 파일 생성
     * - 상수 이름 : ThemeContext
     * - export
     * 
     * 3. Context를 관리해줄 제공자가 필요
     * 
     * 4. 제공자에게 value 전달
     * 
     * 5. footer 에서 버튼을 클릭하면 isDark가 값이 바뀌도록
     * -> 힌트! !isDark => 기존에 있던 다크와 반대로 세팅 
     * 
     * 6. isDark의 상태에 맞게 header, content, footer 를 스타일 변경
     * - 배경색 : 검정색 / 글자색 : 흰색 
     */

    const [isDark, setIsDark] = useState(false)

    return (
        <ThemeContext.Provider value = {{isDark, setIsDark}}>
            <div className = 'page'>

                <EX08_Header></EX08_Header>
                <EX08_Content></EX08_Content>
                <EX08_Footer></EX08_Footer>

            </div>
        </ThemeContext.Provider>
    )
}

export default EX08