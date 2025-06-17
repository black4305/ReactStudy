import React, { useContext } from 'react'
import { ToDoContext } from '../../context/EX09_TodoContext'

const AddItem = () => {

  // 1. newTodoText, setNewTodoText, handleNewTodoAdd 세개를 useContext를 통해 
  //    호출한다 
  const { newTodoText, setNewTodoText,
    handleNewTodoAdd } = useContext(ToDoContext)

  // 2. 사용자가 input 창에 입력한 즉시 (onChange) newTodoText의 값이 변화 
  //    => 힌트! e.target.value 
  //    => console창으로 체크하기~ 
  // console.log('newTodoText : ', newTodoText)

  // 3. 사용자가 'Add' 버튼 클릭 시, handleNewTodoAdd 함수 호출 

  return (
    <div>
      <input type='text'
             value = {newTodoText}
             onChange={(e) => { setNewTodoText(e.target.value) }}></input>
      <button onClick={handleNewTodoAdd}>Add</button>
    </div>
  )
}

export default AddItem