import React, { Component } from 'react'

export default class SetStateCount extends Component {
  constructor(){
    super()
    this.state={
      count:0
    }
  }
update(){
    this.setState({
      count:this.state.count+1
    })
  }
  render() {
    return (
      <div>
        <h3> Couter Program Using setSate : {this.state.count}
         <button onClick={()=>this.update()}>Count</button></h3>
      </div>
    )
  }
}
