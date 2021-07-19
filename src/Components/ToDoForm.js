import React from 'react'
import '../index.css'

export class ToDoForm extends React.Component {

  render () {
    return (
      <div className={'todo-form__container'}>
        <form onSubmit={this.props.addNewTask} className={'todo-form'}>
          <input 
          type={'text'}
          value={this.props.state.inputText}
          placeholder={this.props.state.imputValue}
          onChange={this.props.onNewTaskTextChange}
          className={'todo-form__input todo-form__item'}
          />
          <button
          className={'todo-form__button todo-form__item'}
          >
            Add Item
          </button>
        </form>
      </div>
    )
  }
}

export default ToDoForm