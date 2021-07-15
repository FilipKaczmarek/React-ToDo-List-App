import React from 'react'

export class ToDoForm extends React.Component {

  render () {
    return (
      <div>
        <form>
          <input 
          placeholder={this.props.state.imputValue}
          onChange={this.props.onNewTaskTextChange}
          />
          <button
            onSubmit={() => this.props.addNewTask}>
            Add Item
          </button>
        </form>
      </div>
    )
  }
}

export default ToDoForm
