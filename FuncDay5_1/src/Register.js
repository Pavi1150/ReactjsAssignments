import React, {useState} from 'react';
import './form2.css'
function Register(){
    

    return(
      
        <div class="body">
        <h2 class="title">Register New Account</h2>
        <form>
        <center>
        <table>
            <tr>
                <td>
                    <input type='text' placeholder="Name" id="box1" size="20"/>
                </td>
                <td>
                    <input type='text' placeholder="Last Name"id="box2" size="20"/>
                </td>
            </tr>
            </table>
            <br/>
            <table>
            <tr>
            <td>
                <input type='text' placeholder="Name" id="box3" size="50"/>
            </td>
            </tr>
            <tr>
            <td>
                <br/>
                <input type='text' placeholder="City" id="box4" size="50"/>
            </td>
            </tr>
            <tr>
            <td>
                <br/>
                <input type='text' placeholder="Phone Number" id="box5" size="50"/>
            </td>
            </tr>
            <tr>
            <td>
                <br/>
                <input type='text' placeholder="Email" id="box6" size="50"/>
            </td>
            </tr>
        </table>
        <tr>
            <td>
                <br/>
                <button type='button' id="button" size="100">Create Account</button>
            </td>
            </tr>
        </center>
        </form>
            <div/>
      </div>
    )
  
}
export default Register;