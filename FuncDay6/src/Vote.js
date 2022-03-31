import React, {useState} from 'react';
import './vote.css'
function Vote(){
  const[count,setCount]=useState(0);
    const[count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(0);
    const[count3,setCount3]=useState(0)
    
      const  handleVote=()=>{setCount(count+1)}
      const  handleVote1=()=>{setCount1(count1+1)}
      const  handleVote2=()=>{setCount2(count2+1)}
      const  handleVote3=()=>{setCount3(count3+1)}

    

  
    return(
      <div className='borders'>
       
        <div className='line1'><h2>C      <span className='border1'>{count}</span>   <button className="button3" onClick={handleVote}>vote</button></h2></div>
        
        <div className='line1'><h2>C++     <span className='border2'>{count1}</span>  <button className="button3" onClick={handleVote1}>vote</button></h2></div>
        
        <div className='line1'><h2>Java    <span className='border3'>{count2}</span>   <button className="button3" onClick={handleVote2}>vote</button></h2></div>
        
        <div className='line1'><h2>Python  <span className='border4'>{count3}</span>   <button className="button4" onClick={handleVote3}>vote</button></h2></div>
        

        

        
      </div>
    )
  
}
export default Vote;