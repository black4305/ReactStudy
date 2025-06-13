import React from 'react'
import EX03_Board from '../components/EX03_Board'

const EX04_Map = () => {

    /** map 함수
     * - 주어진 함수를 호출한 결과를 통해서 새로운 배열을 반환
     * - map을 통해 만든 tag포함 배열을 return 문 안에 렌더링 -> 반복되는 코드 완성!
     *   ⭐️ 반드시 key 값이 포함, 그 key 값은 unique 해야 함 !
     *   -> 그래서 key 값은 보통 DB의 pk 값, 고유번호를 사용
    */

    let num = [1,2,3,4,5]
    let newNum = num // num 이라는 배열 가져와서
                .map // 새로운 규칙 적용해서 내보낼거야
                (item => item * 10) // 안에 있는 얘들 전부 가져와서 10배 해서 내보낼거야

    console.log("newNum :", newNum)

    /** map 함수 생략법
     * [원본] 배열함수.map((매개변수) => {return 리턴식})
     * [1차 단축] 배열함수.map((매개변수) => (리턴식))
     * [2차 단축] 배열함수.map(매개변수 => 리턴식) [매개변수가 하나거나, 리턴식이 한줄 일 때]
    */

    let tc = ['선영표', '김자영', '강규남']
    let newTc = tc.map(item => item + ' 선생님')
    console.log('newTc : ', newTc)

    let tcRen = tc.map(item => <button key = {item}>{item} 선생님</button>)

    // 예제 -> map 함수를 이용해서 오른쪽 화면을 구현!
    let menu = ['행복한 담벼락', '그냥 집밥', '시루시루', '김밥집']
    let menuRen = menu.map(menu => <p key = {menu}>  ✔️ {menu}</p>)

    // 배열 안에 객체 + 컴포넌트
    let diceList = [
        {player : '선영표', dice : 1},
        {player : '김자영', dice : 2},
        {player : '강규남', dice : 3},
        {player : '김운비', dice : 4},
        {player : '서보경', dice : 5},
        {player : '김미송', dice : 6},
    ]

    // 1. stuList 라는 배열 안에 객체 3개 구성 (name, bloodType, subject 라는 속성을 가지고 있음)
    let stuList = [
        {name : '선영표', bloodType : 'A', subject : '성악'},
        {name : '김자영', bloodType : 'B', subject : '건축학'},
        {name : '강규남', bloodType : 'O', subject : '경영학'},
    ]

    // 2. 화면에 p태그로 '안녕하세요. 저는 OOO이고, O형이고, 제가 좋아하는 과목은 OOO입니다.'라는 문장을 팀원 전체꺼를 작성

    let words = ['오렌지', '자몽', '히비스커스']
    let newWords = words.filter(item => item.length > 2)
    console.log('newWords : ', newWords)

    let num2 = [1, 2, 3, 4, 5, 6]
    let evenNum2 = num2.filter(item => item % 2 === 0)
    console.log('evenNum2 : ', evenNum2)

    return (
        <div>
            {tcRen}
            <hr/>
            
            <p>오늘의 점심메뉴</p>
            <ul type = 'square'>
                {menu.map(item => <li key = {item}>{item}</li>)}
            </ul>

            <hr/>
            {diceList.map(
                item => <EX03_Board player = {item.player} dice = {item.dice}></EX03_Board>
            )}

            <hr/>
            {stuList.map(
                stu => <p key = {stu.name}>
                    안녕하세요. 저는 {stu.name}이고, {stu.bloodType}형이고, 제가 좋아하는 과목은 {stu.subject}입니다.
                </p>
            )}
        </div>
    )
}

export default EX04_Map