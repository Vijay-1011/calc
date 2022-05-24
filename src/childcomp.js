import axios from "axios";
import { Axios } from "axios";
import React from "react";


class Child extends React.Component{

    state={value:1,count:1,showChild:true,ip2:""};

    componentWillUnmount(){
        console.log('componentwillunmount called')
    }
    componentDidUpdate(){
        console.log('componentdidupdate called')
    }
  
    onbtnclick=()=>{
        this.props.parentinc();
    }
    onbtnclick2=()=>{
        this.props.parentdec();
    }
    getData=()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then((result)=>{console.log(result)}).catch((error)=>{console.log(error)});
    }
    postData=()=>{
        let obj={name:'Hari',gender:'Male'}
        axios.post('https://jsonplaceholder.typicode.com/posts',obj).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)});
    }
    sendData=()=>{
       let text=document.getElementById('my-id').value;
        axios.post('https://jsonplaceholder.typicode.com/posts',text).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)});
    }
    updateip2=(event)=>{
        this.setState({ip2:event.target.value})
    }


    render(){
        return(
            <>
            <div>childcount:{this.state.value}</div>
            <div><button onClick={this.onbtnclick}>Parent Inc</button><button onClick={this.onbtnclick2}>Parent Dec</button></div>
            <div><button onClick={this.getData}>Get data</button></div>
            <div><button onClick={this.postData}>Post data</button></div>
            <button onClick={this.sendData}>Send data</button><input id="my-id"/>IP1<br></br>
            
            <input value={this.state.ip2} onChange={this.updateip2}/>IP2

            </>   
        
        )
    }
}





export default Child;