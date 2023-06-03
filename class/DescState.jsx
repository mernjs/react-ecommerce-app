import React, { Component } from 'react'

export default class DescState extends Component {
  constructor() {
    super()
    this.state = {
      name: "shashi",
      place: "Gorakhpur"
    }
  }
  render() {
    const { name, place } = this.state
    return (
      <div>
        <h3>Destructring State : <b>Name : {name}, Place : {place}</b> </h3>
      </div>
    )
  }
}
