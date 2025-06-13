import React, { useState } from 'react'

const Ex01_State = () => {

  // Case 1. 변수로 화면의 값을 변경
  let num1 = 0;

  const increase = () => {
    num1++;
    console.log('숫자 증가')
    setNum2(num1 + 1);
  }

  return (
    <div>
      <h1>{num1}</h1>
      <button onClick = {increase}>+1</button>
      <button onClick = {() => { setNum2(num2 -1)}}>-1</button>
    </div>
  )
}

export default Ex01_State