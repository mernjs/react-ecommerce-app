import React from "react"
class SetState extends React.Component {
    constructor() {
        super()
        this.state = 
            {
                "name": "Shashi Singh",
                "city": "Gorakhpur"
        }
    }
    updateData() {
        // console.log("shashi");
        this.setState({
            "city":"Lucknow"
        })
    }
    render() {
        return (
            <React.Fragment>
                <h3>SetState :<b>Name {this.state.name} City {this.state.city}</b> <button onClick={()=>this.updateData()}>SetState</button></h3>
            </React.Fragment>
        )
    }
}
export default SetState