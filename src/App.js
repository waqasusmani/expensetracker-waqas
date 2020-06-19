import React, {useState, useReducer} from 'react';
import './App.css';
import Balance from './Balance';
import Transaction from './Transaction';
import Account from './Account';
import transactionsContext from './transactionsContext';
import themeReducer from './ThemeReducer';
import themeContext from './themeContext';

function App() {
  
  var transactionsState = useState([]);
  const [theme,themeChanger] = useReducer(themeReducer,'dark')
  

  return (
    <div className={theme=='dark'?'dark':theme=='light'?'light':theme=='bluesky'?'bluesky':'App'}>
      <header className="App-header">
        <img src={require('./logo.png')} className="App-logo" alt="logo" />
        <h1 className={theme=='bluesky'?'Heading-Blue':'Heading'}>The Bookkeeper</h1>
      </header>
      <div className="ThemeSelector">
        <h3>Choose you color theme here</h3>
      
      <div className='Theme'>
        <input className='ThemeButton-dark' type="button" value="Dark" onClick={()=>themeChanger({type:'dark'})} />
        <input className='ThemeButton-light' type="button" value="Light" onClick={()=>themeChanger({type:'light'})} />
        <input className='ThemeButton-bluesky' type="button" value="Blue Sky" onClick={()=>themeChanger({type:'bluesky'})} />
      </div>
      </div>
      <transactionsContext.Provider value={transactionsState}>
      <themeContext.Provider value={theme}>
        <Balance/>
        <Account />
        <Transaction />
      </themeContext.Provider>
      </transactionsContext.Provider>
    </div>
  );
}

export default App;
