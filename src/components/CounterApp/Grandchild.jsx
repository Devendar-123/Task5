import React from 'react'
import Grandchild1 from './Grandchild1'

const Grandchild = (props) => {
  return (
    <div id='para'>
        <p id='para1'>My Count is:  {props.count}</p>
        <Grandchild1 message = {props.message}/>
    </div>
  )
}

export default Grandchild

