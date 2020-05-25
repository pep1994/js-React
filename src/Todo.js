import React from 'react';

const Todo = props => {
    return (
      <div style = {{textDecoration: props.todo.completed ? "line-through" : ""}} className="todo">
        {props.todo.name}
        <div>
          <button onClick = {() => props.completaTodo(props.index)}>completa</button>
        </div>
      </div>
    )
  }

  export default Todo;
  