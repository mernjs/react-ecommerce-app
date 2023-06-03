import React, { Component } from 'react'

export default class Props extends Component {
    constructor(props){
    super()

    }
  render() {
    return (
      <div>
        <h3>Props : <b>Name {this.props.name}</b></h3>
      </div>
    )
  }
}

