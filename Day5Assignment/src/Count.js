import React, {Component} from 'react';
import './count.css'
class Count extends Component{
    state={
            count:0
        }
        handleIncrement=()=>{this.setState({count:this.state.count+1})}
        handleDecrement=()=>{this.setState({count:this.state.count-1})}

    
  render(){
    return(
      <div>
        <h2>Count {this.state.count}</h2>
        <button className='button1'onClick={this.handleIncrement}>Increment</button>
        <button className='button2'onClick={this.handleDecrement}>Decrement</button>

      </div>
    )
  }
}
export default Count;