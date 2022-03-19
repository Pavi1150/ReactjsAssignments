import React,{Component} from 'react'
class Title extends Component{
    
    render(){
        return(
            <div> 
                <h2>Title={this.props.title} <br></br>
                Age={this.props.age}</h2>
                
                
            </div>
        )
    }
}
export default Title