import React, { useState } from 'react';
import allTransactions from './AllTransactions';


function Account() {

    const [transToShow,transactionsUpdater] = useState(0);
    
    function getTransactionsToShow(){
        var oldestFirst=[];
        for(var i=0;i<allTransactions.length;i++){
            oldestFirst.push(allTransactions[i]);
        }
        var newestFirst=oldestFirst.reverse();
        
        return (
            <p>{
                transToShow<=10?
                    newestFirst.map((val,index)=>{
                        if (index<transToShow){
                            return (
                                <p>{Object.keys(val) + ": "}{Object.values(val)}</p>
                            )
                        }
                    })
                :
                    newestFirst.map((val,index)=>{
                        return (
                            <p>{Object.keys(val) + ": "}{Object.values(val)}</p>
                        )
                    })
            }</p>
        )
    }
    
    function showTransactions(numberOfTransactions) {
        transactionsUpdater(numberOfTransactions)
    }

    function clearHistory(){
        transactionsUpdater(0);
    }

    return (
        <div className="Account" id="Account">
            <h2>My Account</h2>
            <input type="button" value="Last 5 transactions" onClick={()=>showTransactions(5)}/>
            <input type="button" value="Last 10 transations" onClick={()=>showTransactions(10)}/>
            <input type="button" value="All transactions" onClick={()=>showTransactions("all")}/>
            <br></br>
            <button  onClick={clearHistory}>Clear History</button>
        <div className="Transactions" id="Transactions">
            <p id="transToShow">{getTransactionsToShow()}</p>
        </div>
        </div>
    )
}

export default Account;