import React, { useState } from 'react';
function Countapp(){
  
    const[icount,setIcount]=useState();
    const[count,setCount]=useState(0);
 
  const handleIncrement = () => {setCount(Number(count)+Number(icount))}
  const handleDecrement = () => {setCount(Number(count)-Number(icount))}
  
    return (
      <div>
        <div>
          <span class="h3">Count :{count}</span>
          <input type="number" name="icount" value={icount} onChange={(e)=>setIcount(e.target.value)} />
          <button type="button" class="btn btn-primary btn-lg" onClick={handleIncrement} >Increment</button>
          <button type="button" class="btn btn-warning btn-lg" onClick={handleDecrement}>Decrement</button>
        </div>
      </div>
    )
  
}
export default Countapp;