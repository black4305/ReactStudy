import { createRoot } from 'react-dom/client'
import './index.css'

// import App from './example/EX01_State'
// import App from './example/EX02_StatePrac'

// 3. useState 실습 - 주사위게임
//import App from './example/EX03_StateDice'

// [STEP 02. 배열함수로 렌더링]
// 4. Map 예제
// import App from './example/EX04_Map'

// 5. Map 실습(포토카드)
// import App from './example/EX05_MapPrac'

// import App from './example/EX07_Context'

// 8. 컨텍스트 실습 - 다크/라이트 모드 변경
// import App from './example/EX08'

// 9. ToDo List 실습
import App from './example/EX09_ToDo'

createRoot(document.getElementById('root')).render(
    <App />
)
