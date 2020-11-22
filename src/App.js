import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './addTodo';

class App extends Component{
  state = {
    todos:[
      {id:1, content:'Buy some milk'},
      {id:2, content:"Play mario Kart"}
    ]
  }

  addtodo = (todo) =>{
    todo.id = Math.random();
    let todos = [...this.state.todos,todo];
    this.setState({
      todos:todos
    })

  }

  deleteTodo = (id) =>{
    let todos = this.state.todos.filter((todo)=>{
      return todo.id !== id
    }) 
    this.setState({
      todos  //if key and value have same name then we can right it only once
    })
  }
  render(){
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">
          Todo's
        </h1>
        <Todos  todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addtodo={this.addtodo}/>
      </div>
      
    )
  }
}


export default App;
