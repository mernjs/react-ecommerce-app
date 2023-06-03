import React, { Component } from 'react'

export default class GetApi extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            isLoading:false   
        }
    }
    getData(){
        this.setState({isLoading:true})
        fetch("http://localhost:5000/products")
        .then((result)=>result.json())
        .then((resp)=>{
            // console.log(resp)
            this.setState({data:resp,isLoading:false})
        }).catch((err)=>{
            console.log(err)
            this.setState({isLoading:false})
        })
    }
    componentDidMount(){
        this.getData()
    }
  render() {
    const {data,isLoading}=this.state;
    if(isLoading){
        return<div>Loading...</div>
    }
    return (
  
    <div style={{width:"600px" ,background:"red"}}>
       {
         data.map((item,index)=>{
            return(
               <>
                <div style={{height:"200px",width:"200px",background:"green",float:"left"}}>
                <img src={item.thumbnail} style={{height:"200px",width:"200px"}}/> 
                </div>
                <div style={{height:"200px",width:"400px",float:"left"}}>
                <h2>{item.brand}</h2>
                    <b>{item.category}</b><br/>
                    <b>Rating : {item.rating}</b><br/>
                    <b>Price : {item.price}</b><br/>
                    <b>Discount : {item.discountPercentage}</b><br/>
                    <b>{item.description}</b>
                </div>
                </>
            )
         })
       }
    </div>
 
    )
  }
}
