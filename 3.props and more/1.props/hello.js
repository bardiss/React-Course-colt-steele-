class Hello extends React.Component{
    render(){
        
        return(
        <div>
            <p>Hello from {this.props.from} to {this.props.to} {"^".repeat(this.props.n)}</p>
            <img src = {this.props.img}></img>
        </div>
        );
        
    }
}