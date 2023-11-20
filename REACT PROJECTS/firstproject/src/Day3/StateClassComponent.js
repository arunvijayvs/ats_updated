import React, { Component } from 'react'

export default class StateClass extends Component {
    state={name:"SKCET", place:"Coimbatore", count:0}
    handleIncrement=()=>{
        this.setState({count: this.state.count+1});
    }
    changeCollege=()=>{this.setState({name:"CEG", place:"Chennai"})}
    render(){
    return (
        <div>
            <h1>I am studying in {this.state.name} place {this.state.place} and my age is {this.state.count}</h1>
            <button onMouseOver={this.handleIncrement}>Submit</button>
        </div>
    )
    }
}
