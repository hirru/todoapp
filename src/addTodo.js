import React, {Component} from 'react';

class addTodo extends Component{
    state = {
        content:''
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addtodo(this.state);
        this.setState({
            content:''
        })
        
    }

    handleChange = (e) =>{
        let {id, value} = e.target;
        this.setState({
            [id]:value

        })

    }
    
    render(){
        
        return(
            <div >
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="content">Add Todo</label>
                    <input type="text" id="content" onChange={this.handleChange} value={this.state.content}/>
                    
                </form>
            </div>
            
        )
    }
}

export default addTodo;