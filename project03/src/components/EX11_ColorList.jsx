import React from 'react'

const color = ['red', 'orange', 'yellow', 'green', 'blue']

const EX11_ColorList = () => {
    return (
        <div>
            {color.map((color) => (
                <div key = {color} style = {{backgroundColor : color, 
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