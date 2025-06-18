import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    /* useNavigate
        - 페이지 이동을 도와주는 react router dom 기능

        1. import { useNavigate } from 'react-router-dom'
        2. const 이름 = useNavigate()
        3. 페이지를 이동해야 할 경우 : 이름('경로')

        ex) const nav = useNavigate()
            nav('/main)
    */

    const nav = useNavigate()
    let auth = true

    /** 회원이라면 MyPage / 비회원이라면  Main으로 */
    const navMyPage = () => {
        auth === true ? nav('mypage') : nav('/')
    }

    return (
        <div>
            About

            <hr/>

            <button onClick = {navMyPage}>MyPage</button>
        </div>
    )
}

export default About