import React from 'react'

import ToDoHeader from './ToDoHeader'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

import '../index.css'

export class ToDo extends React.Component {
  state = {
    imputValue: 'Type new item',
    inputText: '',
    tasks: []
  }

  onNewTaskTextChange = (e) => {
    this.setState(() => ({
      inputText: e.target.value
    }))
  }

  addNewTask = (e) => {
    e.preventDefault()

    if(!this.state.inputText) return

    const newTask = {
      id: (Math.random() + Math.random()),
      text: this.state.inputText,
      isDeleted: false,
    }

    this.setState((prevState) => ({
      inputText: '',
      tasks: prevState.tasks.concat(newTask)
    }))
  }
  

  render() {
    return (
      <div id={'main--todo'}>
        <ToDoHeader text={'To-Do App'}/>
        <ToDoForm
          state={this.state}
          onNewTaskTextChange={this.onNewTaskTextChange}
          addNewTask={this.addNewTask}
        />
        <ToDoList 
        state={this.state} 
        deleteTask={this.deleteTask}/>
      </div>
    )
  }
}

export default ToDo
