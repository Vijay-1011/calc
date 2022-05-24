import { useEffect, useState } from "react";



const Childfuncomp=(props)=>{
const[count]=useState(1)
useEffect(()=>{
    console.log('component did mount called')
},[])

return(
    <>
    <div>childcount:{count}</div>
    <div><button onClick={ props.parentinc}>parentinc</button><button onClick={props.parentdec}>parentdec</button></div>
    </>
)

}

export default Childfuncomp;