import './App.css'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import About from './pages/About'
import MyPage from './pages/MyPage'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

function App() {

  /* React 페이지 이동 방법
    
    1. npm install react-router-dom

    2. main.jsx로 이동해서 App을 BrowserRouter로 감싸주기
      - BrowserRouter : HTML5에서 지원하는 브라우저의 주소를 감지하는 Component
      - 얘가 없으면 오류가 나니 꼭! 잘 확인할 것

    3. Routes, Route
      - Routes : 여러 Route들을 감싸서, 그 중 조건에 맞는 Route 하나만 렌더링 해주는 역할
      - Route : 경로
        - ** 필수 속성 2가지 ** : path, element
        - path : 사용자가 이렇게 요청했을 때
        - element : 이 컴포넌트를 내가 보여줄게
    
    뒤에서 나올 다양한 기능들을 사용하려면 일단 Routes - Route 처리가 되어있어야만 사용 가능
  */

  return (
    <>
      <h1>React Router에 대하여...</h1>

      <Routes>
        <Route path = '/' element = {<Main/>}></Route>
        <Route path = '/about' element = {<About/>}></Route>
        <Route path = '/mypage' element = {<MyPage/>}></Route>
        <Route path = '/product/:num' element = {<Product/>}></Route>

        {/** 위의 경로에 모두 해당하지 않는 경우 */}
        <Route path = '*' element = {<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
