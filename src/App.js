import React from "react";
import Child from "./childcomp";


class App extends React.Component{

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
            <div>Parentcount:{this.state.count}</div>
           
            <div><button onClick={this.onbtnclick3}>Child Inc</button><button onClick={this.childdec}>Child Dec</button></div>
            
            
            <div><button onClick={()=>this.setState({showChild:!this.state.showChild})}>Toggle</button></div>
           
           {this.state.showChild && <Child parentinc={this.parentinc} parentdec={this.parentdec}/>}
            </>
            
        ) 
    }

 
}
export default App;