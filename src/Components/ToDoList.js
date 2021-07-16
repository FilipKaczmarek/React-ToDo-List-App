import React from 'react'

export class ToDoList extends React.Component {
    render() {
        const { tasks } = this.props.state

        return (
            <div>
                <ul>
                    {tasks.map((task, keyID) => {
                        return <li key={task + Math.random()}>
                            {task.text}
                        </li>
                    }
                    )}
                </ul>
            </div>
        )
    }
}

export default ToDoList