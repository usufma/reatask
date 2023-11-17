
class Hello extends Component{
    constructor(){
        super()

        this.state={
            message:"Hello iam state"
        }

    }

    render() {
        return(

            <div>{this.state.message}</div>
        )

}
}
export default Hello;