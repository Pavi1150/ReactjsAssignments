import React,{useState} from 'react';
import './count.css';
function Count(){
  const[count,setCount]=useState(0)
  const handleIncrement=()=>{setCount(count+1)}
  const handleDecrement=()=>{setCount(count-1)}

return(
  <div>
    <h2>Count:{count}</h2>
    <button class="button1" onClick={handleIncrement}>Increment</button>
    <button class="button2" onClick={handleDecrement}>Decrement</button>

  </div>
)
}
export default Count;