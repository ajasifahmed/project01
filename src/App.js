import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

// function App(props) {
//   return (
//   <div>Hello {props.name} your subject {props.subject} from App.js</div>
//   );
// }

function App({name,subject}) {
  return <div>
    <p>This is the parant and we are going to call a child in it.</p>
  Hello {name} your subject {subject} from App.js
  <br/>
  <Hello p1="Parameter1" p2="Parameter2"/>
</div>
}

export default App;
