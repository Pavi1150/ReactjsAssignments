// import React, {Component} from 'react';
// import './App.css';
// import Title from './Title.js';
// import Employee from './Employee.js';
// import Vote from './Vote.js';
// import Name from './Name.js';

// class App extends Component{
  
//   state={
//     title:'Hello,Pavi',
//     age:20
    
//   }
//   render()
//   {
//   return (
//     <div>
//           <Title title={this.state.title} age={this.state.age}/>
//           <br/>
//           <h1>------------------------------------------------</h1>
//           <Employee name='Pavi' salary={50000}/>
//           <Employee name='Subi' salary={70000}/>
//           <h1>------------------------------------------------</h1>
//           <br/>
          
//           <Vote></Vote>
//           <h1>------------------------------------------------</h1>
//           <br/>
//           <Name/>
//     </div>
//   );
// }
// }

// export default App;

import React, {useState, usestate} from 'react';
import './App.css';
import Title from './Title.js';
import Employee from './Employee.js';
import Vote from './Vote.js';
import Name from './Name.js';

function App(){
  
  
  const[title,setTitle]=useState("Hello,Pavi")
  const[age,setAge]=useState(20)
  
  return (
    <div>
          <Title title={title} age={age}/>
          <br/>
          <h1>------------------------------------------------</h1>
          <Employee name='Pavi' salary={50000}/>
          <Employee name='Subi' salary={70000}/>
          <h1>------------------------------------------------</h1>
          <br/>
          
          <Vote></Vote>
          <h1>------------------------------------------------</h1>
          <br/>
          <Name/>
    </div>
  );

}

export default App;
