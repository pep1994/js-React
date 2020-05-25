import React, {Component} from 'react';
import Todo from './Todo.js';
import Form from './Form.js';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos: [
        {
          name: 'sto imparando React',
          completed: false 
        },
        {
          name: 'sto imparando gli state',
          completed: false 
        },
        {
          name: 'sto imparando i component',
          completed: false 
        }
      ]
    }
  }

  addTodo = (todo) => {
    const newTodos = [...this.state.todos, {name: todo}];
    this.setState({
      todos: newTodos
    })
  }

  completaTodo = (index) => {
    const newTodos = [...this.state.todos];
    newTodos[index].completed = true;
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className='app'>
        <div className='todo-list'>
          {this.state.todos.map((item, index) => (
            <Todo key={index}  todo = {item} index = {index} completaTodo = {this.completaTodo} />
          ))}

          <Form submit={this.addTodo}/>
        </div>
        
      </div>
    )
  }
}

export default App;
