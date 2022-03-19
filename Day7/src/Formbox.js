import React, {Component} from 'react';
import './formbox.css';

class Formbox extends Component{
    state={
        nameofpassenger:'',
        age:'',
        gender:'',
        source:'',
        destination:'',
        isChecked:false,
        onSubmitted:false
    }
    handleNop=(e)=>{this.setState({nop:e.target.value})}
    handleAge=(e)=>{this.setState({age:e.target.value})}
    handleGender=(e)=>{this.setState({gender:e.target.value})}
    handleSource=(e)=>{this.setState({source:e.target.value})}
    handleDestination=(e)=>{this.setState({destination:e.target.value})}
    handleIsChecked=(e)=>{this.setState({isChecked:e.target.value})}
    handleSubmit=(e)=>{this.setState({onSubmitted:true})
                        this.setState({onSubmitted:!this.state.onSubmitted})}
    
    render(){
        return(
            <div>
                <div class="border">
                <center>
                <table>
                <thead>
                    <tr>
                        <td>
                        Name of Passenger
                        </td>
                        <td>
                        <input type='text' value={this.state.nop}
            onChange={this.handleNop}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>
                        <input type='text' value={this.state.age}
            onChange={this.handleAge}/>
                        </td>
                    </tr>
                    <div>
                
                    <tr>
                        <td>Gender</td>
                        &nbsp;
                        <td>
                            
                                <input type="radio" name="samename" value="Male" onChange={this.handleGender}/>Male
                                
                                
                                  &nbsp;
                                  <input type="radio" name="samename" value="Female" onChange={this.handleGender}/>Female
                                </td>
                            </tr>
                    
                    </div>
                    <tr>
                        <td>Source</td>
                        <td>
                            <select value={this.state.source} onChange={this.handleSource}>
                            
                            <option value="Select">--Select--</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Chennai">Chennai</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Destination</td>
                        <td>
                        <select value={this.state.destination} onChange={this.handleDestination}>
                        <option value="Select">--Select--</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Simla">Simla</option>
                            <option value="Delhi">Delhi</option>
                            </select>
                        </td>
                    </tr>
                </thead>
                </table>
                <div>
            <label><input type="checkbox" onChange={this.handleIsChecked} />I Agreed all terms and conditions</label>
            </div>
        
            
            
            <br/>
            <button type="submit" className="button1" onClick={this.handleSubmit}>Submit</button>

            <br/>
            {this.state.onSubmitted&&<div class="details">
            <h4>_________________________________________________________________</h4>
            <h3>Name of Passenger:  <span className="l1">{this.state.nop}</span></h3>
            <h3>Age:    <span className="l1">{this.state.age}</span></h3>
            <h3>Gender: <span className="l1">{this.state.gender}</span></h3>
            <h3>Travelling from <span className="l1">{this.state.source}</span> to <span className="l1">{this.state.destination}</span></h3>
            <h3><span className="l1">{this.state.isChecked?"Yes":"No"}</span>, I Agreed all terms and conditions</h3>
            <h4>_________________________________________________________________</h4>  
            </div>
    }
    </center>
                </div>
                </div>
        )
    }
}
export default Formbox