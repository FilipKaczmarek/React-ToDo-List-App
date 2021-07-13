import React from 'react'


export class ToDoHeader extends React.Component {
  render () {
    const { text } = this.props

    return (
      <div>
        <h1>
          {text}
        </h1>
      </div>
    )
  }
}

export default ToDoHeader
