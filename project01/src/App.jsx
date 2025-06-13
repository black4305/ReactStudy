import './App.css'

function App() {

  /*
    JSX : 한 파일 안에 html과 js를 동시 작성하는 확장자
    - 가독성이 좋고 작성이 쉽고, 기능의 분류에 탁월
    - 매번 DOM에 접근하지 않더라도 HTML을 변경할 수 있다
  */

  /*
    JSX 특징
    1. JSX expressions must be have one parent element
    - 여러 요소가 있다면 반드시 하나의 부모요소로 감싸줄 것
    - 이 때 태그여도 좋고 태그를 생략한 형태여도 OK

    2. 표현식 사용 가능
    - 리턴 문 안에 JS문법을 쓰려면? 중괄호 안에 작성할 것
    - 단 if문은 return 문 안에서 사용 불가
    - 조건식을 쓸 때는 다양한 방법을 사용

    3. class 대신 className 사용
    
    4. 끝태그 생략 불가
    -> <br/> (가능) / <br> (불가능)

    5. HTML 태그 사용시 무조건 소문자로 사용

    6. 조건문 사용 
     - return 문 안에는 if문을 사용할 수 없는데 3가지 방법으로 대체
     [6-1] 조건에 따른 결과가 2개일 때 삼항연산자
     [6-2] 조건에 따른 결과가 1개일 때 && 연산자 
     [6-3] 조건에 따른 결과가 3개 이상일 때는 return 문 바깥쪽에 if문

    7. 스타일링 적용 2가지 방법
    - 기존대로 css로 적용
    - 스타일 객체 style 속성에 적용

    8. StrictMode란 검토용 모드
    - 리액트 프로젝트를 2번 실행
    - main.jsx로 이동해서 삭제
  */

  let name = "선영표"
  let state = "closed"

  let score = 50
  let result = ""

  if(score > 90) {
    result = "A"
  } else if(score > 80) {
    result = "B"
  } else {
    result = "C"
  }

  let divStyle = {
    backgroundColor : 'yellow',
    color : 'blue',
    fontSize : '30px'
  }

  console.log('hello world!')
  // alert('pop')

  return (
    <>
      <div>
        점수 : {score} / 등급 : {result} 등급
      </div>

      <div>
        {name}님의
        {name == "서보경"
        ? <span>spring</span> 
        : <span>react</span>
        }
        페이지입니다.
      </div>
      
      {state == "opened" && <div>환영합니다.</div>}
    </>
  )
}

export default App
