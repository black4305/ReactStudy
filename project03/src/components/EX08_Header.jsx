import React, { useContext } from 'react'
import { ThemeContext } from '../context/EX12_ThemeContext'

const EX08_Header = () => {

    const { isDark } = useContext(ThemeContext)

    return (
        <div
            className = 'header'
            style = {{
                backgroundColor : isDark ? 'black' : 'whitesmoke',
                color : isDark ? 'white' : 'black'
            }}>
            <h2>스마트인재개발원</h2>
        </div>
    )
}

export default EX08_Header