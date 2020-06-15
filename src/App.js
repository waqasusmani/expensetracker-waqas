import React, {useState} from 'react';
import './App.css';
import Balance from './Balance';
import Transaction from './Transaction';
import Account from './Account';
import transactionsContext from './transactionsContext';

function App() {
  
  var transactionsState = useState([]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./logo.png')} className="App-logo" alt="logo" />
        <h1 className="Heading">The Bookkeeper</h1>
      </header>
      
      <transactionsContext.Provider value={transactionsState}>
        <Balance/>
        <Account />
        <Transaction />
      </transactionsContext.Provider>
    </div>
  );
}

export default App;
