import React, { Component } from 'react'

export default class RefEC extends Component {
    myRef=React.createRef();
    handleChange=(e)=>{
        e.prevnetDefault();
        const val=this.myRef.current.value;
        console.log(val);
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleChange}>
            <input type="text" ref={this.myref}></input>
            <button type="submit">submit</button>

        </form>
        
      </div>
    )
  }
}
