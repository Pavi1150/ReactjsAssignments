import React, {Component} from 'react';

class Regform extends Component{
    state={
        title:'',
        firstname:'',
        lastname:'',
        dob:'',
        email:'',
        password:'',
        confirmpassword:'',
        isChecked:false,
        onSubmitted:false
    }
    // handleChange=(e)=>
    // this.setState({[e.target.name]:e.target.value})
    handleTitle=(e)=>{this.setState({title:e.target.value})}
    handleFirstname=(e)=>{this.setState({firstname:e.target.value})}
    handleLastname=(e)=>{this.setState({lastname:e.target.value})}
    handleDob=(e)=>{this.setState({dob:e.target.value})}
    handleEmail=(e)=>{this.setState({email:e.target.value})}
    handlePassword=(e)=>{this.setState({password:e.target.value})}
    handleConfirmpassword=(e)=>{this.setState({confirmpassword:e.target.value})}
    handleIsChecked=(e)=>{this.setState({isChecked:e.target.value})}
    handleRegister=(e)=>{
        if(!this.state.title){
            alert('Title is mandatory')
            return}
        if(!this.state.firstname){
            alert('Firstname is mandatory')
            return
        }
        if(!this.state.lastname){
            alert('Lastname is mandatory')
            return
        }
        if(this.state.password===this.state.confirmpassword)
    this.setState({onSubmitted:true})
        else
        alert('password should match')
this.setState({onSubmitted:true})}
        handleReset=(e)=>{e.preventDefault();this.setState({  title:'',
        firstname:'',
        lastname:'',
        dob:'',
        email:'',
        password:'',
        confirmpassword:''})}
    
render(){
    return(
        <div>
            {!this.state.onSubmitted&&(
        <div class="w-50 h-40 border border-2 border-dark justify-content-center">
            
            
            <table class="form-label">
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Firstname</td>


                    <td>Lastname</td>
                </tr>
            </thead >
            <tbody>
                <tr>
                    <td>
            
            <select class="form-select"value={this.state.title} onChange={this.handleTitle}>
                            
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
            <input type='text' value={this.state.Lastname}
            onChange={this.handleLastname}/>
            </td>
            </tr></tbody>
            <br/>
            
            <thead>
                <tr>
                    <td>Date of Birth</td>
                    <td> Email</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    <input type='date' value={this.state.Dob}
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
            <div>
            <label><input type="checkbox" onChange={this.handleIsChecked} />Accept to terms and conditions</label>
            <br/>
            </div>
            <div>
            <br/>
            <button type="submit" class="btn btn-secondary" onClick={this.handleRegister}>Register</button>
            &nbsp;&nbsp;
            <button type="reset" class="btn btn-secondary" onClick={this.handleReset}>Reset</button>
            </div>
            </div>)}
            

            {this.state.onSubmitted&&<div>
            <h3>************************************</h3>
            <h4>Title : {this.state.title}</h4>
            <h4>Firstname : {this.state.firstname}</h4>
            <h4>Lastname : {this.state.lastname}</h4>
            <h4>Date of Birth : {this.state.dob}</h4>
            <h4>Email : {this.state.email}</h4>
            
            <h3>************************************</h3>
            </div>
}
        </div>
    )
}
}
export default Regform