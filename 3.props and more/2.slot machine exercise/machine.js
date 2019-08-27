class Machine extends React.Component{
    render(){
        const {s1, s2, s3} = this.props;
       
    /*    let msg;
        if(s1 === s2 && s2 === s3){
            msg = "you win!";
        }else{
            msg = "you lose!";
        };*/

        const win = (s1 === s2 )&& (s2 === s3);  //boolean value
        return (
            <div>
                <p>{s1} {s2} {s3} </p>
                <p>{win?'you win!': 'you lose'}</p>
            </div>
            )
    }
}