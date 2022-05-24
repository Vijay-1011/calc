import React from "react";


class Incdec extends React.Component{

    state={count:1};
    inc=()=>{
        this.setState({count:this.state.count+1})
    }
    dec=()=>{
        this.setState({count:this.state.count-1})
    }

render(){

    return(
        <>
        <div>count:{this.state.count}</div>
        <div><button onClick={this.inc}>Incementor</button></div>
        <div><button onClick={this.dec}>Decrementor</button></div>
        </>
    )
}

}

export default Incdec;