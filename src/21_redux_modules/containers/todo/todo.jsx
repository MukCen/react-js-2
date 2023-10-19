import React, { Component } from 'react';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';
import { connect } from 'react-redux';

import {addTask , removeTask} from '../../actions/actionCreator';


// const TASKS = [
//   {
//     id: 1,
//     text: 'Learn ReactJS',
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: 'Learn Redux',
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     text: 'Learn React Router',
//     isCompleted: false,
//   }
// ];

class ToDo extends Component {

  state = {
    activeFilter: 'all',
    taskText: ''
  }

  inputHandler= (event)=>{
    this.setState({taskText:event.target.value})
  }

  addTasks=({key})=>{
     const {taskText} = this.state;
     if (taskText.length > 3 && key==='Enter') {
      const {addTask}=this.props;
      addTask((new Date()).getTime(),taskText,false);
     this.setState({taskText:'',})
    
  }
}
  render() {
     const { activeFilter , taskText} = this.state;
    const {tasks,removeTask}=this.props;
    // const tasksList = [];
    const isTasksExist = tasks && tasks.length > 0;

    return (
      <div className="todo-wrapper">
        <ToDoInput onChange={this.inputHandler} value={taskText} onKeyPress={this.addTasks} />
        {isTasksExist && <ToDoList tasksList={tasks} removeTask={removeTask}/>}
        {isTasksExist && <Footer amount={tasks.length} activeFilter={activeFilter} />}
      </div>
    );
  }
 }


export default connect(state=>({
  tasks:state.tasks,
}),{addTask, removeTask}
)(ToDo)
// const connect=connect(tasks(addTask));
// export default ToDo;
