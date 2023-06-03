import React, { Component } from 'react'

export default class State extends Component {
    constructor(){
        super()
        this.state={
            "name":"Shashi Singh"
        }  
    }
    render(){
        return(
            <h3>State : Name <b>{this.state.name}</b></h3>

        )
        }
    }