import React from 'react'
import ListItem from './ListItem'
import AddItem from './AddItem'

const List = () => {
    return (
        <div className = 'list-container'>
            <ul>
                <ListItem/>
            </ul>

            <AddItem/>
        </div>
    )
}

export default List