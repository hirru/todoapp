import React from 'react'

function Todos({todos, deleteTodo}) {
    const todoList = todos.length ? (
        todos.map((todo) =>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span className="todoItem" onClick={()=>deleteTodo(todo.id)}>{todo.content}</span>
                </div>
            )
        })
    ) : (<p className="center">You have no to do left</p>)
    return (
        <div className="todos collection">
           {todoList}
            
        </div>
    )
}

export default Todos
