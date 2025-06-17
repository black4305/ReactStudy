import React, { useState } from 'react'
import '../EX09.css'
import List from '../components/EX09/List'
import { ToDoContext } from '../context/EX09_TodoContext'

const EX09_ToDo = () => {

    const [todos, setTodos] = useState([
        {text : '오늘 내용 복습', completed : false, key : 1},
        {text : '물 2L 마시기', completed : true, key : 2}
    ])

    // STEP 1. 할 일 추가하기
    // 1-1. 사용자가 input에 입력한 텍스트를 newTodoText 안에 세팅
    // 1-2. 사용자가 'Add' 버튼을 클릭하면 1-1에서 받은 내용을 기반으로 배열을 누적

    const [newTodoText, setNewTodoText] = useState('')

    /** todos 배열에 할 일을 추가해주는 함수 */
    const handleNewTodoAdd = () => {
        console.log('handleNewTodoAdd 함수 호출!')

        setTodos([
            ...todos,
            { text : newTodoText,
                completed : false,
                key : todos.length ? todos[todos.length - 1].key + 1 : 1 
            }
        ])

        setNewTodoText('')
    }

    /** 사용자가 선택한 할 일을 삭제하는 함수 */
    const handleTodoDelete = (key) => {
        console.log('handleTodoDelete 함수 호출!', key)

        const filterTodos = todos.filter(todo => todo.key !== key)
        setTodos(filterTodos)
    }

    // STEP 3. 할 일 완료 / 미완료 토글

    /** 사용자가 선택한 할 일의 완료 여부를 변경해주는 함수 */
    const handleTodoToggle = (key) => {
        console.log('handleTodoToggle 함수 호출!', key)
        todos.find(todo => todo.key == key)
    }

    return (
        <ToDoContext.Provider value = {{ todos, setTodos, newTodoText, setNewTodoText, handleNewTodoAdd, handleTodoDelete, handleTodoToggle }}>
            <div className = 'todo-container'>
                <h1>ToDo List</h1>
                <List></List>
            </div>
        </ToDoContext.Provider>
    )
}

export default EX09_ToDo