import React,{Component} from 'react'
class Employee extends Component{
    
    render(){
        return(
            <div> 
                Name={this.props.name} and Salary is {this.props.salary}
                
                
            </div>
        )
    }
}
export default Employee