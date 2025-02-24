import React from 'react'
import Grandchild from './Grandchild'

const Child = (props) => {
  return (
    <div>
        <Grandchild
            count = {props.count}
            message = {props.message}
            
        />
        <div className='myButtons'>
            <button onClick={props.handleCount} disabled={props.count>=20} id='btn1'>Count++</button>
            <button onClick={props.decreaseCount} disabled={props.count<=0} id='btn2'>Count--</button>
            <button onClick={props.resetCount} disabled={props.count===0} id='btn3'>Reset</button>

        </div>
    </div>
  )
}

export default Child
