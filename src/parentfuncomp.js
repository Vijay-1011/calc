import React from "react";
import { useState,useEffect} from "react";
import Childfuncomp from "./childfuncomp";




const Parentfuncomp=()=>{

const[count,updcount]=useState(1)

const parentinc=()=>{
    updcount(count+1)
}
const parentdec=()=>{
    updcount(count-1)
}
useEffect(()=>{
    if(count!=1){
    console.log('component did update called')
    }
},[count])
    

    return(
        <>
        <div>parentcount:{count}</div>
        <div><button>childinc</button><button>childdec</button></div>
        <div><button >Toggle</button></div>

       <Childfuncomp parentinc={parentinc} parentdec={parentdec}/>
        </>
       
    )
    }

export default Parentfuncomp;