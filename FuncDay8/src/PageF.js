import React, {useState} from 'react';

function PageF(){
    
    const[fname,setFname]=useState('');
    const[lname,setLname]=useState('');
    const[age,setAge]=useState();
    const[onSubmitted,setOnSubmitted]=useState(false);
    const[onAge,setOnAge]=useState(false);
    

   
    const handleRegister=(e)=>{setOnSubmitted(true)}
    const handleReset=(e)=>{e.preventDefault();{  
        setFname('')
        setLname('')
        setAge('')}}
    const handleShowage=(e)=>{setOnAge(!onAge)}
   
    
        return(
            
            <div class="form-group" align="center">
                {!onSubmitted&&(<div>
                <table class="align-middle">
                    <div class="w-70 m-5 p-2 border border-3 border-dark">
                <tr>
                        <td>First Name</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td>
                        <input type='text' value={fname} onChange={(e)=>setFname(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Last Name</td>&nbsp;
                        <td>
                        <input type='text' value={lname} onChange={(e)=>setLname(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Age </td>&nbsp;
                        <td>
                        <input type='number' value={age} onChange={(e)=>setAge(e.target.value)}/>
                        </td>
                    </tr>
                    <div>
            <br/>
            <button type="submit" class="btn btn-secondary" onClick={handleRegister}>Register</button>
            &nbsp;&nbsp;
            
            <button type="reset" class="btn btn-secondary" onClick={handleReset}>Reset</button>
            </div>
            </div>
                </table>
            </div>)}

                {onSubmitted && <div class="w-5 m-3 p-1 border border-2 border-dark">
                    <h4>Name : {fname} {lname}</h4>
                    {onAge&&(<h4>Age : {age}</h4>)}
                    <button type="submit" onClick={handleShowage}>{onAge?"Hide age":"Show Age"}</button>
                    </div>
    }
    
    

                
                
                </div> 
                
        )
    
}
    export default PageF

