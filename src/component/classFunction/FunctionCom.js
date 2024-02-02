import { useEffect, useState } from "react";

const FunctionCom=({name})=>{
    const [count,setCount] =useState(0)
    useEffect(()=>{
      const timer=  setInterval(()=>{
            console.log("setTime intervel")
        },1000)


        return()=>{
            clearInterval(timer)
        }
    },[])
  
    return(
        <div className="component-holder" style={{border:"2px solid black",margin:"30px",padding:"30px",width:"fit-content"}}>
        <h1>count={count}</h1>
        <h1>name :{name}</h1>
        <h2>place: Hassan</h2>
        <h3>working: jobLess</h3>
    </div>
    )
}

export default FunctionCom;