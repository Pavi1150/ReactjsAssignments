import React, {Component} from 'react';
import './regform.css'
class Regform extends Component{
    state={
        title:'',
        firstname:'',
        lastName:'',
        dob:'',
        email:'',
        password:'',
        confirmpassword:'',
        isChecked:false,
        onSubmitted:false
    }
    
    handleTitle=(e)=>{this.setState({title:e.target.value})}
    handleFirstname=(e)=>{this.setState({firstname:e.target.value})}
    handleLastname=(e)=>{this.setState({lastname:e.target.value})}
    handleDob=(e)=>{this.setState({dob:e.target.value})}
    handleEmail=(e)=>{this.setState({email:e.target.value})}
    handlePassword=(e)=>{this.setState({password:e.target.value})}
    handleConfirmpassword=(e)=>{this.setState({confirmpassword:e.target.value})}
    handleIsChecked=(e)=>{this.setState({isChecked:e.target.value})}

    handleRegister=(e)=>{this.setState({onSubmitted:true})}
    handleReset=(e)=>{e.preventDefault();this.setState({  title:'',
    firstname:'',
    lastname:'',
    dob:'',
    email:'',
    password:'',
    confirmpassword:''})}
    
render(){
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
                    <select value={this.state.title} onChange={this.handleTitle}>
                            
                            <option value="Select">--Select--</option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Others">Others</option>
        
                    </select>
            
            </td>
            <td>
            <input type='text' value={this.state.firstname}
            onChange={this.handleFirstname}/>
            </td>
            <td>
            <input type='text' value={this.state.lastname}
            onChange={this.handleLastname}/>
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
                    <input type='date' value={this.state.dob}
                     onChange={this.handleDob}/>
                    </td>
                    <td>
                    <input type='text' value={this.state.email}
                    onChange={this.handleEmail}/>

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
                    <input type='password' value={this.state.password}
            onChange={this.handlePassword}/>    
                    </td>
                    <td>
                    <input type='password' value={this.state.confirmpassword}
            onChange={this.handleConfirmpassword}/>  
                    </td>
                </tr>
            </tbody>
            </table>
            <br/>
            <div>
            <label><input type="checkbox" onChange={this.handleIsChecked} />Accept to all terms and conditions</label>
            </div>
            
            <br/>
            <button type="submit" className="button1" onClick={this.handleRegister}>Register</button>
            <button type="reset" className="button2" onClick={this.handleReset}>Reset</button>
            
            
            

            {this.state.onSubmitted&&<div className="details">
            <h3>************************************</h3>
            <h4>Title : {this.state.title}</h4>
            <h4>Firstname : {this.state.firstname}</h4>
            <h4>Lastname : {this.state.lastname}</h4>
            <h4>Date of Birth : {this.state.dob}</h4>
            <h4>Email : {this.state.email}</h4>
            <h3>************************************</h3>
            </div>
}
</center>
        </div>
    )
}
}
export default Regform