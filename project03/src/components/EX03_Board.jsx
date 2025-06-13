import React from 'react'

const EX03_Board = ({ player, dice }) => {
  return (
    <div style = {{margin : '5px'}}>
        <h2>{player}</h2>
        <img src = {`/img/dice${dice}.png`}></img> 
    </div>
  )
}

export default EX03_Board