import React, {Component} from 'react';
import './vote.css'
class Vote extends Component{
    state={
            count:0,
            count1:0,
            count2:0,
            count3:0
            
        }
        handleVote=()=>{this.setState({count:this.state.count+1})}
        handleVote1=()=>{this.setState({count1:this.state.count1+1})}
        handleVote2=()=>{this.setState({count2:this.state.count2+1})}
        handleVote3=()=>{this.setState({count3:this.state.count3+1})}

    
  render(){
    return(
      <div className='borders'>
        {/* <Vote name='C'/>
        <Vote name='C++'/>
        <Vote name='JAVA'/>
        <Vote name='Python'/> */}
        <div className='line1'><h2>C      <span className='border1'>{this.state.count}</span>   <button className="button3" onClick={this.handleVote}>vote</button></h2></div>
        
        <div className='line1'><h2>C++     <span className='border2'>{this.state.count1}</span>  <button className="button3" onClick={this.handleVote1}>vote</button></h2></div>
        
        <div className='line1'><h2>Java    <span className='border3'>{this.state.count2}</span>   <button className="button3" onClick={this.handleVote2}>vote</button></h2></div>
        
        <div className='line1'><h2>Python  <span className='border4'>{this.state.count3}</span>   <button className="button4" onClick={this.handleVote3}>vote</button></h2></div>
        

        {/* <h1>{this.state.count}</h1>
        <h2>{this.state.count1}</h2>
        <h2>{this.state.count2}</h2>
        <h2>{this.state.count3}</h2> */}
        {/* <button className="button1" onClick={this.handleVote}>vote</button>
        <button className="button2" onClick={this.handleVote1}>vote</button>
        <button className="button3" onClick={this.handleVote2}>vote</button>
        <button className="button4" onClick={this.handleVote3}>vote</button> */}

        
      </div>
    )
  }
}
export default Vote;