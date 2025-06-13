import React from 'react'

const ListItem = () => {
    return (
        <div className = 'list-item'>
            <li>
                <input type = 'checkbox' />

                <label>
                    <span className = 'todo-text'>첫 번째 할 일</span>
                </label>

                <button>Delete</button>
            </li>
        </div>
    )
}

export default ListItem