import React, {Component} from 'react';

import './App.css';
import Print from './Print.js';

import Count from './Count.js';
import Form from './Form.js';
import Register from './Register.js';
import Welcomeform from './Welcomeform.js';
function App() {
  return (
    <div>
      <Print></Print>
       <br/>
       <h1>-----------------------------------------------------------</h1>
       <Count></Count> 
       <br/>
       <h1>-----------------------------------------------------------</h1>
       <Form/>
       <br/>
       <h1>--------------------------------------------------------------------------------------------------------------------</h1>
       <Register/>
       <br/>
       <h1>-----------------------------------------------------------------------------------------------------------------------</h1>
       <Welcomeform></Welcomeform>
    </div>
  );
}

export default App;
