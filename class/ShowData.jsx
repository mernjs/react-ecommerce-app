import React, { Component } from 'react'
export default class ShowData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],

        }
    }
    getData() {
        fetch("https://dummyjson.com/products")
            .then((result) => result.json())
            .then((resp) => {
                // console.log(resp)
                this.setState({ data: resp?.products })
            }).catch((err) => {
                console.log(err)
                this.setState({ isLoading: false })
            })
    }
    ratingChanged(newRating) {
        console.log(newRating)
    }
    componentDidMount() {
        this.getData()
    }
  
    render() {
        const { data } = this.state;

        return (
            <div>
                {
                    data.map((item, index) => {
                        return (
                            <>
                                <div className='container'>
                                    <div className='row border border-3 p-3' style={{ width: "600px" }} >
                                        <div className='col-sm-4 p-1'>
                                            <div className='card' style={{width:"10rem"}}>
                                                <img src={item.thumbnail} style={{ height: "170px" }} />
                                            </div>
                                        </div>
                                        <div className='col-sm-8 p-1'>
                                            <div className="card-body  p-2">
                                                <b>{item.title}</b><br/>
                                                <b>Rating </b><span style={{color:"skyblue"}}>{item.rating}</span><br/>
                                                <span><b>{item.price}</b> M.R.P.<strike>79,900 </strike> ({item.discountPercentage}% off)</span><br/>
                                                <span>{item.description}</span><br/>
                                                <b>Free Delivery by Amazon</b><br/>
                                                <a href="+5 colors/patterns" >Go somewhere</a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        )
    }
}
