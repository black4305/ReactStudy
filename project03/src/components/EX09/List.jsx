import React, { useContext } from 'react'
import ListItem from './ListItem'
import AddItem from './AddItem'
import { ToDoContext } from '../../context/EX09_ToDoContext'

const List = () => {

    const { todos } = useContext(ToDoContext)
    // console.log(todos)

    return (
        <div className = 'list-container'>
            <ul>
                {
                    todos.map(todos =>
                        <ListItem todos = {todos} key = {todos.key}/>
                    )
                }
            </ul>

            <AddItem/>
        </div>
    )
}

export default List