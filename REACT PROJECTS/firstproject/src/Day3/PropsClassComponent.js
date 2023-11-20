import React, { Component } from 'react'

export default class PropsClass extends Component {
    render(){
    return (
        <div>
            <h1>I am watching {this.props.movie} </h1>
        </div>
    )
    }
}
