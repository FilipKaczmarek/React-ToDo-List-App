import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

import '../index.css'

export class ToDoList extends React.Component {
    render() {
        const { tasks } = this.props.state

        let tasksFiltered = tasks.filter(tasks => tasks.isDeleted !== true )

        return (
            <div className={'todo-list__container'}>
                <ul className={'todo-list__list'}>
                    {tasks.length === 0 
                    ? 
                    <li key={'empty-list'}
                        className={'empty-list'}
                    >List has no items</li> 
                    :
                    tasksFiltered.map((task, keyID) => {
                        return (<li key={task.id} className={'todo-list__list-item'}>
                            <span>{task.text}</span> 
                            <button key={task.id} onClick={this.props.deleteTask}><FaTrashAlt /></button>
                        </li>)
                    }
                    )}
                </ul>
            </div>
        )
    }
}

export default ToDoList