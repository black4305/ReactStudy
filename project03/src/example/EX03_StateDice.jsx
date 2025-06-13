import React, { useState } from 'react'
import EX03_Board from '../components/EX03_Board'

const EX03_StateDice = () => {

    let [myDice, setMyDice] = useState(1)
    let [comDice, setComDice] = useState(1)

    // 4. 1~6까지 랜덤한 숫자를 return 시켜주는 makeRandom 이라는 함수 생성
    const makeRandom = () => {
        return parseInt(Math.random() * 6) + 1
    }

    // 1. '던지기' 버튼 클릭 -> throwDice function 실행
    const throwDice = () => {

        setMyDice(makeRandom())
        setComDice(makeRandom())
    }

    // 2. '리셋' 버튼 클릭 -> resetDice function 실행
    const resetDice = () => {
        setMyDice(1)
        setComDice(1)
    }

  return (
    <div>
        <h1>주사위 게임</h1>
        <div>
            <button onClick = {throwDice}>던지기</button>
            <button onClick = {resetDice}>리셋</button>
        </div>
        <div style = {{display: 'flex'}}>
            <EX03_Board player = '나' dice = {myDice}></EX03_Board>
            <EX03_Board player = '컴퓨터' dice = {comDice}></EX03_Board>
        </div>
        <h2>결과 :
            {myDice > comDice ? '승리' : myDice < comDice ? '패배' : '무승부'}
        </h2>
    </div>
  )
}

export default EX03_StateDice