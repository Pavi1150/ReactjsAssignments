import React, {useState} from 'react';
import './regform.css'
function RegFormF(){
    
    const[title,setTitle]=useState('');
    const[firstname,setFirstName]=useState('');
    const[lastname,setLastName]=useState('');
    const[dob,setDob]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmpassword,setConfirmPassword]=useState('');
    const[isChecked,setIsChecked]=useState(false);
    const[onSubmitted,setOnSubmitted]=useState(false);
    // const[reset,setReset]=useState(false);

    

    const handleRegister=()=>{setOnSubmitted({onSubmitted:true})}
    const handleReset=(e)=>{e.preventDefault();{setTitle('')
    setFirstName('')
    setLastName('')
    setDob('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setIsChecked(false)
    }}
    

    return(
        <div class="border">
            <center>
            <table>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Firstname</td>
                    <td>Lastname</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    <select value={title} onChange={(e)=>setTitle(e.target.value)}>
                            
                            <option value="Select">--Select--</option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Others">Others</option>
        
                    </select>
            
            </td>
            <td>
            <input type='text' value={firstname}
            onChange={(e)=>setFirstName(e.target.value)}/>
            </td>
            <td>
            <input type='text' value={lastname}
            onChange={(e)=>setLastName(e.target.value)}/>
            </td>
            </tr></tbody>
            <br/>
            <thead>
                <tr>
                    <td>Date of Birth</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    <input type='date' value={dob}
                     onChange={(e)=>setDob(e.target.value)}/>
                    </td>
                    <td>
                    <input type='text' value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>

                    </td>
                </tr>
            </tbody>
            
            <br/>
            <thead>
                <tr>
                    <td>Password</td>
                    <td>Confirm Password</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    <input type='password' value={password}
            onChange={(e)=>setPassword(e.target.value)}/>    
                    </td>
                    <td>
                    <input type='password' value={confirmpassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}/>  
                    </td>
                </tr>
            </tbody>
            </table>
            <br/>
            <div>
            <label><input type="checkbox" onChange={()=>setIsChecked(!isChecked)} />Accept to all terms and conditions</label>
            </div>
            
            <br/>
            <button type="submit" className="button1" onClick={handleRegister}>Register</button>
            <button type="reset" className="button2" onClick={handleReset}>Reset</button>
            
            {/* onClick={()=>setReset(()=>"")} */}
            

            {onSubmitted&&<div className="details">
            <h3>************************************</h3>
            <h4>Title : {title}</h4>
            <h4>Firstname : {firstname}</h4>
            <h4>Lastname : {lastname}</h4>
            <h4>Date of Birth : {dob}</h4>
            <h4>Email : {email}</h4>
            <h3>I {isChecked?"Agree":"Disagree"} all terms and conditions</h3>
            <h3>************************************</h3>
            </div>
}
</center>
        </div>
    )

}
export default RegFormF