import React, { useContext } from 'react'
import { ColorContext } from '../context/EX11_ColorContext'

const EX11_ColorList = () => {

    const { setColor } = useContext(ColorContext)

    let color = ['red', 'orange', 'yellow', 'green', 'blue']

    return (
        <div>
            {color.map((color) => (
                <div key = {color} 
                    onClick = {() => {
                        setColor(color)
                    }}
                    style = {{backgroundColor : color, 
                    width : '100px',
                    height : '100px',
                    display : 'inline-block'
                    }}>
                </div>
            ))}
        </div>
    )
}

export default EX11_ColorList