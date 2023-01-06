import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react';

import React from 'react';


function App() {
  return (
    <div className="App">
     <h1>EXPENSE TRACKER</h1>
     <p>Your Balance</p>
     <input ></input>
<div>
Transaction List will appear here
<div></div>
</div>
<h2 id="count-el">0</h2>
let countEl=document.getDocumentById("count-el")
let count=0;
count=count+1
countEl.innerText=count;
</div>

     
  );
}


export default App;
