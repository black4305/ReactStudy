function AppExample() {

    // 1. 사용자에게 이름을 입력받는다. (userName)
    let userName = prompt('이름을 입력해주세요.')

    // 2. 현재 날짜를 가지고 올 것 (new Date() => today 변수)
    let today = new Date()
    console.log("날짜만 가져오기", today.toLocaleDateString())

    // 3. 현재 날짜에서 몇 월인지 가지고 올 것
    let month = today.getMonth() + 1
    console.log("월만 가져오기", today.getMonth())

    // 4. 조건에 따라 계절을 정의할 것 (season)
    let season = ''

    if (month >= 3 && month <= 5) {
        season = '봄'
    } else if (month >= 6 && month <= 8) {
        season = '여름'
    } else if (month >= 9 && month <= 11) {
        season = '가을'
    } else {
        season = '겨울'
    }

    // if(parseInt(month / 3) == 1) {
    //     season = '봄'
    // } else if(parseInt(month / 3) == 2) {
    //     season = '여름'
    // } else if(parseInt(month / 3) == 3) {
    //     season = '가을'
    // } else {
    //     season = '겨울'
    // }

    // 결과
    // h1 -> 오늘 날짜 2025.06.10
    // 수평선 (hr)
    // h3 => OOO님 지금은 여름입니다. 좋은 하루 보내세요!

    return (
        <div>
            <h1>오늘 날짜 : {today.toLocaleDateString()}</h1>
            <hr />
            <h3>{userName}님 지금은 {season}입니다. 좋은 하루 보내세요!</h3>
        </div>
    )
}

export default AppExample