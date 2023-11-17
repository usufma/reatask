import { Component } from "react"

class Welcome1 extends Component{
    render(){
        return(
            <h1>hi {this.props.name} .Iam Class props, {this.props.age} </h1>
        )
    }
 }
    export default Welcome1