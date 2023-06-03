import React, { Component } from 'react'

export default class Constructor extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"shashi"
        }
    }
  render() {
    return (
      <div>
             <h2>React Life Cycle</h2>
        <h3>I am a Constructor {this.state.name}</h3>
      </div>
    )
  }
}
