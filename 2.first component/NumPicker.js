
function getNum(){
    return Math.floor(Math.random()*10)+1;
}


class NumPicker extends React.Component{
    render(){
        const number = getNum();
        let msg ;
        if (number === 7){
            msg = <div>
                <h2>congrats!</h2>
            </div>
        }else{
            msg = <div>
                <h2>good luck!</h2>
            </div>
        };


        return(
            <div>
                <h1> your number is {number}</h1>
                {msg}
            </div>
            
            )
    }
};

