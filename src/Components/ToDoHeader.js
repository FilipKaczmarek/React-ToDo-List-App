import React from 'react'
import '../index.css'

export class ToDoHeader extends React.Component {
  render () {
    const { text } = this.props

    return (
      <div className={'todo-list__header'}>
        <h1>
          {text}
        </h1>
      </div>
    )
  }
}

export default ToDoHeader
