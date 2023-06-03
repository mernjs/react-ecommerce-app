import React, { Component } from 'react'

export default class EventHandle extends Component {
    eventHandle(){
        alert("Event Handle")
    }
  render() {
    return (
      <div>
        <h3>Event Handle : <button onClick={this.eventHandle}>Click Me</button></h3>
      </div>
    )
  }
}
