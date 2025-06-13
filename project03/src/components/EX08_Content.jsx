import React, { useContext } from 'react'
import { ThemeContext } from '../context/EX12_ThemeContext'

const EX08_Content = () => {

    const { isDark } = useContext(ThemeContext)

    return (
        <div className = 'content'
            style = {{
                backgroundColor : isDark ? 'black' : 'whitesmoke',
                color : isDark ? 'white' : 'black'
            }}>
            <h3>지각하지 않기</h3>
        </div>
    )
}

export default EX08_Content