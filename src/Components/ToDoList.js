import React from 'react'

export class ToDoList extends React.Component {
    render() {
        const { tasks } = this.props.state

        return (
            <div>
                <ul>
                    { tasks.length === 0 ? null :
                        tasks.map((task) => (
                        <li key={task.id}>{task.text}</li>
                        )
                    )}
                </ul>
            </div>
        )
    }
}

export default ToDoList