import React, { Component } from 'react'

export default class DefaultClassProps extends Component{
  render() {
    return (
      <div>
        <h1>I am in my {this.props.place} now!</h1>
      </div>
    )
  }
}

DefaultClassProps.defaultProps={
    place:"home"
}
