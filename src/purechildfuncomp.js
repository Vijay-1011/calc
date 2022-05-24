import React,{ useEffect, useState} from "react";
import Childtwofun from './purechildtwofun';



const Puchildfuncomp=(props)=>{
const[count,updcount]=useState(1)
useEffect(()=>{
    console.log('component did mount called')
},[])

const Childinc=()=>{
    updcount(count+1)

}
const tempFun=()=>{
    updcount(count+1)

}
return(
    <>
    <div>*************************</div>
    <div>parentcount:{count}</div>
    <div><button onClick={Childinc}>parentinc</button></div>
    <Childtwofun parentinc={tempFun}/>
    </>
)

}

export default React.memo(Puchildfuncomp);