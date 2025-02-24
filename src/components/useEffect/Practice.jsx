import React, { useState,useEffect } from 'react'
import "./practice.css"
const Practice = () => {
    const [count, setCount] = useState(0);
    const [total,setTotal] = useState(0);
    
    // useEffect(()=>{
    //     alert("Runs on each effect")
    //     console.log("Count is:",count,"Total is:",total);
        
    // })
    // useEffect(()=>{
    //     alert("Runs only once")
    //     console.log("Hello");
        
    // },[])

    // useEffect(()=>{
    //     alert("I will run when count is updated!")
    //     console.log("Count is:" ,count);
        
    // },[count])

    //  useEffect(()=>{
    //     alert("I will run when total is updated!")
    //     console.log("Total is:", total);
        
    //  },[total])

    useEffect(()=>{
        alert("I will run when count & total is updated!")
        console.log("Count is:",count,"Total is:" ,total);
        
    },[count,total])


     function handleClick(){
        setCount(count+1);
    }

    let handleClickTotal = ()=>{
        setTotal(total+1);
    }

  return (
    <div>
        <button onClick={handleClick}>Click Me for count</button> <br/>
      Count is: {count} <br />
      <button onClick={handleClickTotal}>Click Me for total</button> <br/>
      Total is: {total}
    </div>
  )
}

export default Practice
