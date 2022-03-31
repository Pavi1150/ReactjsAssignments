import React, {useState} from 'react';
import './form3.css'
function Welcomeform(){
    return(
        <div>
        <center>
            <h1 class="alignn">WELCOME!</h1>
            
            <div class="column">
                <table>
                    <thead>
                    <tr>
                        &nbsp;
                    <td>ALREADY REGISTERED?</td>
                       
                        <td>NEW CUSTOMER?</td>     
                        
                      
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        &nbsp;
                        
                        <br/>
                        <td><br/><input type="text" placeholder="Email account" id="box1" size="20"/></td>
                        
                        <td><br/><input type="text" placeholder="Email account" id="box2" size="20"/></td>
                        
                    </tr>
                    </tbody>
                    
                    <tr>
                        &nbsp;
                        <td><br/><input type="password" placeholder="Password" id="box1" size="20"/></td>
                            
                        <td><br/><input type="password" placeholder="Password" id="box2" size="20"/></td>
                        
                    </tr>
                    
                </table>
                
             <div>
                 <span class="psw">Forgot Password?</span>
             </div>  
             <br/> 
             <div class="align">
                    <button type="submit"placeholder="SIGN IN" class="boxx" size="100">Sign In</button>
               
                    <button type="submit"placeholder="CREATE ACCOUNT" class="boxxx" size="20">Create Account</button>
              </div>      
                
              <span class="line"></span> 
            
            </div>
            </center>
            </div>
        
    
    )
    }

export default Welcomeform;