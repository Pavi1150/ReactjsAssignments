import React, {Component} from 'react';

class Page extends Component{
    state={
        firstname:'',
        lastname:'',
        age:'',
        onSubmitted:false,
        onAge:false,
        hideAge:false
    }
    handleFirstname=(e)=>{this.setState({firstname:e.target.value})}
    handleLastname=(e)=>{this.setState({lastname:e.target.value})}
    handleAge=(e)=>{this.setState({age:e.target.value})}
    handleRegister=(e)=>{this.setState({onSubmitted:true})}
    handleReset=(e)=>{e.preventDefault();this.setState({  title:'',
        firstname:'',
        lastname:'',
        age:'',})}
    handleShowage=(e)=>{this.setState({onAge:true})}
    handleHideage=(e)=>{this.setState({hideAge:true})}
    render(){
        return(
            
            <div class="form-group" align="center">
                <div></div>
                <table class="align-middle">
                    <div class="w-70 m-5 p-2 border border-3 border-dark">
                <tr>
                        <td>First Name</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td>
                        <input type='text' value={this.state.firstname} onChange={this.handleFirstname}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Last Name</td>&nbsp;
                        <td>
                        <input type='text' value={this.state.lastname} onChange={this.handleLastname}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Age </td>&nbsp;
                        <td>
                        <input type='text' value={this.state.age} onChange={this.handleAge}/>
                        </td>
                    </tr>
                    <div>
            <br/>
            <button type="submit" class="btn btn-secondary" onClick={this.handleRegister}>Register</button>
            &nbsp;&nbsp;
            
            <button type="reset" class="btn btn-secondary" onClick={this.handleReset}>Reset</button>
            </div>
            </div>
                </table>

                {this.state.onSubmitted&& <div class="w-25 m-5 p-2 border border-3 border-dark">
                    <h4>Name : {this.state.firstname} {this.state.lastname}</h4>
                    <button type="submit" onClick={this.handleShowage}>Show age</button>
                    </div>
    }
    
    {!this.state.hideAge&&(<div>


                {this.state.onAge&&<div class="w-25 m-5 p-2 border border-3 border-dark">
                    <h4>Name : {this.state.firstname} {this.state.lastname}</h4>
                    <h4>Age:{this.state.age}</h4>
                    <button type="submit" onClick={this.handleHideage}>Hide age</button>
    
                </div>
                }
                </div>)
    }
               
                </div> 
                
        )
    }
}
    export default Page