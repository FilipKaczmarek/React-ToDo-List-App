import React from 'react'

export class ToDoForm extends React.Component {

  render () {
    return (
      <div>
        <form onSubmit={this.props.addNewTask}>
          <input 
          type={'text'}
          value={this.props.state.inputText}
          placeholder={this.props.state.imputValue}
          onChange={this.props.onNewTaskTextChange}
          />
          <button>
            Add Item
          </button>
        </form>
      </div>
    )
  }
}

export default ToDoForm