import React from "react";


class Purechildclcom extends React.PureComponent{

    state={value:1,count:1,showChild:true};

    componentWillUnmount(){
        console.log('componentwillunmount called')
    }
    componentDidUpdate(){
        console.log('componentdidupdate called')
    }
  
    onbtnclick=()=>{
        
    this.setState({count:this.state.count+1})
    }
   

    render(){
        return(
            <>
            <div>##################</div>
            
            <div>childcount:{this.state.count}</div>
            <div><button onClick={this.onbtnclick}>Child Inc</button></div>
           
            </>   
        
        )
    }
}





export default Purechildclcom;