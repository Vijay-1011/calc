import React from "react";
import Purechildclcom from "./purechildclasscomp";
import Puchildfuncomp from "./purechildfuncomp";



class Pureparclcom extends React.Component{

    state={value:1,count:1,showChild:true};
    
    componentDidMount(){
        console.log('componentdidmount called')
    }
   
    
    childinc=()=>{
        this.setState({value:this.state.value+1})
    }
    
    childdec=()=>{
        this.setState({value:this.state.value-1})
    }
    parentinc=()=>{
        this.setState({count:this.state.count+1})
    }
    parentdec=()=>{
        this.setState({count:this.state.count-1})
    }
  
    render(){
        return(
            <>
            <div>Parentcount:{this.state.value}</div>
           
            <div><button onClick={this.childinc}>Parent Inc</button></div>
            
            
            
            <Purechildclcom />
            <Puchildfuncomp/>
            </>
            
        ) 
    }

 
}
export default Pureparclcom;