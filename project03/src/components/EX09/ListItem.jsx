import React, { useContext } from 'react'
import { ToDoContext } from '../../context/EX09_TodoContext'

const ListItem = ({ todos }) => {

    const { handleTodoDelete, handleTodoToggle } = useContext(ToDoContext)

    return (
        <div className = 'list-item'>
            <li>
                <input type = 'checkbox'>
                    onChange = { () => { handleTodoToggle(todos.key) }}
                    checked = { todos.completed }
                </input>

                <label style = {{
                    textDecoration : todos.completed ? 'line-through' : 'none'
                }}>
                    <span className = 'todo-text'>{todos.text}</span>
                </label>

                <button onClick= {() => { handleTodoDelete(todos.key) }}>Delete</button>
            </li>
        </div>
    )
}

export default ListItem