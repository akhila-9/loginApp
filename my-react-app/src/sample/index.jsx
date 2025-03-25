import React, { useState } from 'react'
import "./index.css"
const LoginApp = () => {
    const [change,setchange]=useState(true)
 const clickingFunc=()=>{
    setchange(!change)
   
 }
  return (
    <div className='container'>
      <div className='para'>{change?"please login":"welcome user"}</div>
      <div>
        <button onClick={clickingFunc}>{change?"login":"logout"}</button>
      </div>
    </div>
  )
}

export default LoginApp
