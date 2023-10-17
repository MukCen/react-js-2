import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({ tasksList }) => (
  <ul className="todo-list">
    {tasksList.map( ({ id,text, isComleted }) => (
      <ToDoItem key={id} text={text} isCompleted={isComleted} />

    ))}


  </ul>
    /* {tasksList.map(({ id, text, isCompleted }) => (
      <ToDoItem key={id} text={text} isCompleted={isCompleted} />
    ))} */
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
}

ToDoList.defaultProps = {
  tasksList: [],
}

export default ToDoList;
