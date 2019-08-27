class App extends React.Component{
    render(){
        return(
            <div>
                <Hello 
                    from="esraa"
                    to="rokia"
                    n = {2}
                    img = "https://images.unsplash.com/photo-1566792514296-4d98155de8cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />


                <Hello 
                    from="bardis" 
                    to="maher"
                    n = {4}
                />


            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))