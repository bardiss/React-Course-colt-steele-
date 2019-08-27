class App extends React.Component{
    render(){
        return (

            <div>
                <Friend 
                    name = "mr nobody"
                    hobbies = {["nothing", "nothing", "nothing"]}
                
                />

                <Friend 
                    name = "bardis"
                    hobbies = {["reading", "writing", "nothing"]}
                
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));