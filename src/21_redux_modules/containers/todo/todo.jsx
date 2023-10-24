import React, { Component } from 'react';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

import './todo.css';
import { connect } from 'react-redux';

import {addTask , removeTask, completeTask, changeFilter} from '../../actions/actionCreator';
import filters from '../../reducers/filter';
import tasks from '../../reducers/task';


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
    // activeFilter: 'all',
    taskText: ''
  }

  inputHandler= (event)=>{
    this.setState({taskText:event.target.value})
  };

  addTasks=({key})=>{
     const {taskText} = this.state;
     if (taskText.length > 3 && key==='Enter') {
      const {addTask}=this.props;
      addTask((new Date()).getTime(),taskText,false);
     this.setState({taskText:'',})
    
    }
  };
  filterTask=(tasks1, activeFilter2)=>{
       
    switch (activeFilter2) {      
      case  'active':
          return tasks1.filter(task=>!task.isCompleted);
          break;   
      case 'completed':
            return tasks1.filter(task=>task.isCompleted);
             break;   
         
           default:

           return tasks1;
    }
  };

  amount =(Arrays)=>Arrays.filter(task=>!task.isCompleted).length;


  render() {
     const {  taskText} = this.state;
    const {tasks,removeTask, completeTask, changeFilter, filters}=this.props;
    // const tasksList = [];
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTask=this.filterTask(tasks, filters);
    const amounted=this.amount(tasks);

    return (
      <div className="todo-wrapper">
        <ToDoInput onChange={this.inputHandler} value={taskText} onKeyPress={this.addTasks} />
        {isTasksExist && <ToDoList tasksList={filteredTask} removeTask={removeTask} completeTask={completeTask}/>}
        {isTasksExist && <Footer amount={amounted} changeFilter={changeFilter} activeFilter={filters} />}
      </div>
    );
  }
 }


export default connect(state=>({
  tasks:state.tasks,
  filters:state.filters
}),{addTask, removeTask, completeTask, changeFilter}
)(ToDo)
// const connect=connect(tasks(addTask));
// export default ToDo;
