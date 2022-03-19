// import React,{Component} from 'react'
// class Name extends Component{
    
//     render(){
//         return(
//             <div> 
//                 {this.props.name}
                
//             </div>
//         )
//     }
// }
// export default Name

import React, { Component } from 'react'

class Name extends Component {
  state={
    name:"Welcome"
  }
  handleChange=()=>{
    if(this.state.name === 'Welcome'){
      this.setState({name:"Hello World"})
    }
    else{
    this.setState({name:'Welcome'})
  }}
  render() {
    return (
      <div>{this.state.name}
      <br/>
      <br/>
       <button type="submit" onClick={this.handleChange}><h4>Change</h4></button>
       </div>
    )
  }
}

export default Name