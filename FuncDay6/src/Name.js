import React, { useState } from 'react'

function Name(){
  
  const[name,setName]=useState("Welcome");
  const handleChange=()=>{setName("HelloWorld")}
  
    return (
      <div>{name}
      <br/>
      <br/>
       <button type="submit" onClick={handleChange}><h4>Change</h4></button>
       </div>
    )
  
}

export default Name