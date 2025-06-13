import './App.css'
import MenuBox from './components/MenuBox'

function App() {

  /* 컴포넌트(component)
   * : 리액트로 만들어진 앱을 이루는 최소단위 
   * - 반복되는 코드를 묶어서 '태그화' 시킨다 => 컴포넌트 생성 
   * - 반드시 대문자로 시작해야함 (파일명, 함수명, ... )
   * 
   * component 사용 방법
   * 1. 반복되는 코드 혹은 태그화 시킬 코드를 인지
   * 2. 대문자로 시작하는 컴포넌트 파일을 생성 (.jsx)
   * 3. 컴포넌트 파일 내 포함되어있어야 하는 내용
   *  -> 점수, return문, export
   * 4. 해당 컴포넌트를 사용할 파일에 import
   *  -> import 별칭 from '경로'
   * 5. 컴포넌트 사용
   *  -> <별칭 />
   */
  
  return (
    <>
      <MenuBox menuName="아메리카노" price="3500"></MenuBox>
      <MenuBox menuName="민트초코" price="4500" />
    </>
  )
}

export default App
