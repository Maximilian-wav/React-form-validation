//use this first section to view the initial PoC with formfirst.js 
//
/* import React , { Component } from 'react';
import './App.css';
import Form from './components/Formfirst'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Form />
      </div>
    )
  }
}

export default App; */
//****************************** */
//Below is the finalized password strength module - comment out in order to view the original Proof

import React from "react";
import PasswordStrength from "./components/PasswordStrength";

class App extends React.Component {
    render() {
        return (
            <div>
                <PasswordStrength></PasswordStrength>
            </div>
        );
    }
}

export default App;