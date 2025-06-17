import React, { useEffect, useState } from 'react'

const EX11_useEffectPrac = () => {

    let pos = ['rock', 'scissors', 'paper']

    const [myChoice, setMyChoice] = useState()
    const [comChoice, setComChoice] = useState()
    const [result, setResult] = useState('게임 전')
    const [round, setRound] = useState(0)

    const gameStart = (item) => {
        setMyChoice(item)
        setComChoice(pos[parseInt(Math.random() * 3)])

        setRound(round + 1)
    }

    useEffect(() => {
        if(round !== 0) {
            
            // 가위바위보 승부 판별
            if(myChoice === comChoice) {
                setResult('동점')
            }
            else if(myChoice === 'rock') {
                comChoice === 'paper' ? setResult('패배') : setResult('승리')
            }
            else if(myChoice === 'scissors') {
                comChoice === 'rock' ? setResult('패배') : setResult('승리')
            }
            else {
                comChoice === 'scissors' ? setResult('패배') : setResult('승리')
            }
        }

    }, [round])

    return (
        <div>
            <h1>Rock Scissors Paper {round}라운드</h1>
            <p>나의 선택 : {myChoice}</p>
            <p>상대의 선택 : {comChoice}</p>

            <h2>결과 : {result}</h2>

            <hr/>

            {pos.map(
                item => <button 
                key = {item}
                onClick = {() => {gameStart(item)}}>
                    {item}
                </button>
            )}
        </div>
    )
}

export default EX11_useEffectPrac