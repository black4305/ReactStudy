## vite란?
- React Project를 위한 빠르고 간단한 빌드도구
- 기본적으로 vite는 Node.js가 설치되어 있어야 함
- CRA(Create React App)를 대체하여 사용

## 순서

### React 초기설정
1. 리액트 프로젝트를 보관한 폴더 생성 (-> ReactStudy)
2. terminal에서 해당 폴더로 directory change (cd 경로)
3. npm create vite@latest
4. 프로젝트 이동 서렂ㅇ (한글, 숫자로 시작 X)
5. Framework : React 선택
6. Variant 선택 : Javascript + SWC 선택
7. project 생성 완료
8. 실행을 위해 생성된 프로젝트 폴더로 이동

9. npm install
10. npm run dev
11. 로컬에 있는 주소로 들어가기

### 초기설정 이후
1. 실행할 폴더로 이동
2. npm run dev

## React Frontend 라이브러리
1. Component : 최소 단위
2. Props : 상위 컴포넌트 -> 하위 컴포넌트로 값을 전달 / 하위컴포넌트 전달할속성 = "값"
3. State : 변할 수 있는 수 => 화면

## map()
- 배열 내의 **모든 요소를 원하는 규칙에 따라 변환한 후 새로운 배열을 생성**하여 반환하는 함수

## filter()
- 주어진 함수의 테스트를 통과하는 요소만 모아서 새로운 배열로 반환