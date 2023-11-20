import React, { Component } from 'react'

export default class ComponentDid extends Component {
    state={color1:"Yellow"}
    shouldComponentUpdate()
    {
        return true;
    }
    componentDidMount()
    {
        setTimeout(()=>{this.setState({color1:"Blue"})},3000)
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        document.getElementById("i").innerHTML="Previous Value "+prevState.color1;
    }
    componentDidUpdate()
    {
        document.getElementById("ii").innerHTML="Updated Value "+this.state.color1;
    }
  render() {
    return (
      <div>
        <h1>{this.state.color1}</h1>
        <p id="i"></p>
        <p id="ii"></p>
      </div>
    )
  }
}
