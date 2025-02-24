import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [count , setCount] = useState(0)
    const message ="Welcome to the counter application!"
    const handleCount = ()=>{
        setCount(count + 2)
    }

    const decreaseCount = ()=>{
        setCount(count - 2)
    }

    const resetCount = ()=>{
        setCount(0)
    }

  return (
    <div id='myApp'>
        <h2>Counter Application</h2>
       <Child
            count = {count}
            message={message}
            handleCount = {handleCount}
            decreaseCount = {decreaseCount}
            resetCount = {resetCount}
       />
    </div>
  )
}

export default Parent
