import { useEffect, useState,memo} from "react";



const Childtwofun=(props)=>{
const[count,updcount]=useState(1)
useEffect(()=>{
    console.log('component did mount called')
},[])

const incrementor=()=>{
    updcount(count+1)

}


const Callmethod=()=>{
    props.parentinc()
}

return(
    <>
    <div>$$$$$$$$$$$$$$$$$$$$$$$$$$$$$</div>
    <div>childcount:{count}</div>
    <div><button onClick={incrementor}>childinc</button></div>
    <div><button onClick={Callmethod}>parentinc</button></div>
    </>
)

}

export default memo(Childtwofun);