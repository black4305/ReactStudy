import React, { useContext } from 'react'
import { ColorContext } from '../context/EX11_ColorContext'

const EX11_ColorResult = () => {
    const { color } = useContext(ColorContext)

    return (
        <div style = {{
            width : '100px',
            height : '100px',
            backgroundColor : color
            }}>
        </div>
    )
}

export default EX11_ColorResult