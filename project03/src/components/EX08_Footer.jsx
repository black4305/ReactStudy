import React, { useContext } from 'react'
import { ThemeContext } from '../context/EX12_ThemeContext'

const EX08_Footer = () => {

    const { isDark, setIsDark } = useContext(ThemeContext)
 
    return (
        <div className = 'footer'
            style = {{
                backgroundColor : isDark ? 'black' : 'whitesmoke',
                color : isDark ? 'white' : 'black'
            }}>

            <button className = 'button'
                onClick = {() => setIsDark(!isDark)}>
                Dark Mode
            </button>
        </div>
    )
}

export default EX08_Footer