import React, {Component} from 'react';


class Formbox extends Component{
    state={
        nameofpassenger:'',
        age:'',
        gender:'',
        source:'',
        destination:'',
        isChecked:false,
        // unChecked:false,
        onSubmitted:false,
        flag:false
    }
    handleNop=(e)=>{this.setState({nop:e.target.value})}
    handleAge=(e)=>{this.setState({age:e.target.value})}
    handleGender=(e)=>{this.setState({gender:e.target.value})}
    handleSource=(e)=>{this.setState({source:e.target.value})}
    handleDestination=(e)=>{this.setState({destination:e.target.value})}
    handleIsChecked=(e)=>{this.setState({isChecked:e.target.value})}
    handleUnChecked=(e)=>{this.setState({unChecked:e.target.value})}
    handleSubmit=(e)=>{    if(!this.state.nop){
            alert('Number of Passenger is mandatory')
            return}
        if(!this.state.age){
            alert('Age is mandatory')
            return
        }
    
        if(!this.state.source){
            alert('Select Source')
            return
        }
        if(!this.state.destination){
            alert('Select Destination')
            return
    }
    this.setState({onSubmitted:true})
        
    }
    
    render(){
        return(
            <div>
                {!this.state.onSubmitted&&(
                <div class="w-50 m-10 p-2 border border-5 border-dark justify-content-center">
                <table>
                <thead class="thead-light">
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
                    
                
                    <tr>
                        <td>Gender</td>
                        <td>
                            
                                <input type="radio" name="samename" value="Male" onChange={this.handleGender}/>Male
                                
                                
                                  &nbsp;
                                  <input type="radio" name="samename" value="Female" onChange={this.handleGender}/>Female
                                </td>
                            </tr>
                    
                    
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
            <br/>
            </div>
            
            
            {/* <button type="submit" class="button" onClick={this.handleSubmit} ></button> */}
            <button type="submit" class="btn btn-primary btn-sm" value="Submit" onClick={this.handleSubmit}>Submit</button>
            </div>)}
            
            
            
            
            
            {this.state.onSubmitted&&<div>
            <h4>_________________________________________________________________</h4>
            <h3>Name of Passenger:  <span class="text-danger mark">{this.state.nop}</span></h3>
            <h3>Age:    <span class="text-danger mark">{this.state.age}</span></h3>
            <h3>Gender: <span class="text-danger mark">{this.state.gender}</span></h3>
            <h3>Travelling from <span class="text-danger text-decoration-underline mark">{this.state.source}</span> to <span class="text-danger text-decoration-underline mark">{this.state.destination}</span></h3>
            <h3><span class="text-danger mark">{this.state.isChecked?"Yes":"No"}</span>, I Agreed all terms and conditions</h3>
            <h4>_________________________________________________________________</h4>  
            </div>
    }
                </div>
        )
    }
}
export default Formbox