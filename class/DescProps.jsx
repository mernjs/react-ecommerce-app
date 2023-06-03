import React, { Component } from 'react'

export default class DescProps extends Component {
   
  render() {
    const{name,place}=this.props
    return (
      <div>
        <h3>Destructring Props : <b>Name : {name}, Place : {place}</b> </h3>
      </div>
    )
  }
}
