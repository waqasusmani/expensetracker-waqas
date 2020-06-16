import React, { useState, useContext } from 'react';
import allTransactions from './AllTransactions';
import transactionsContext from './transactionsContext';


function Account() {
    var [newTransactions,newTransactionsUpdater] = useState(0)
    var [newReversedLength,newReversedLengthUpdater] = useState(0)
    var trnsState = useContext(transactionsContext);
    var reversedArray=[];

    if (document.getElementById("noTransactions")){
        if (trnsState[0].length>newReversedLength) {
            document.getElementById("noTransactions").innerHTML=""
        }
    }
    

    function showTransactions (trans) {
        
        var transToShow=document.getElementById("transToShow");
        transToShow.innerHTML="";
        var transactionsToShow = [];
        var docToShow;

        for (var i=allTransactions.length-1;i>=0;i--){
            reversedArray.push(allTransactions[i])
        }

        if (reversedArray.length==0) {
                docToShow=document.createElement('p');
                docToShow.innerHTML= `No transactions to show`
                docToShow.setAttribute("class","noTransactions")
                docToShow.setAttribute("id","noTransactions")
                transToShow.appendChild(docToShow);
                
        }
        else if ((!isNaN(trans) && reversedArray.length<=trans)||(trans=="all")) {
            reversedArray.map((val, index)=>{
                docToShow=document.createElement('tr');
                docToShow.setAttribute('class','transactionsDisplayed');
                docToShow.innerHTML= `<td>${Object.keys(val)}</td><td>${Object.values(val)[0][0]}</td><td> $ ${Object.values(val)[0][1]}</td>`
                transToShow.appendChild(docToShow);
                console.log(Object.values(val));
            })
        }
        else if (!isNaN(trans) && reversedArray.length>trans){
            for (var i = 0; i<trans;i++) {
                transactionsToShow.push(reversedArray[i])
            }
            transactionsToShow.map((val, index)=>{
                docToShow=document.createElement('p');
                docToShow.setAttribute('class','transactionsDisplayed');
                docToShow.innerHTML= `<td>${Object.keys(val)}</td><td>${Object.values(val)[0][0]}</td><td> $ ${Object.values(val)[0][1]}</td>`
                transToShow.appendChild(docToShow);
                console.log(Object.values(val));
            })
        }

        newReversedLengthUpdater(reversedArray.length)
        newTransactionsUpdater(++newTransactions);
    }    
    

    function clearHistory() {
        document.getElementById("transToShow").innerHTML=""
        newReversedLengthUpdater(0)
    }

    return (
        <div className="Account" id="Account">
            <h2>My Account</h2>
            <input type="button" value="Last 5 transactions" onClick={()=>showTransactions(5)}/>
            <input type="button" value="Last 10 transations" onClick={()=>showTransactions(10)}/>
            <input type="button" value="All transactions" onClick={()=>showTransactions("all")}/>
            <br></br>
            <button onClick={clearHistory}>Clear History</button>
        <div className="Transactions" id="Transactions">
            <p className="newTransactionsToShow">{trnsState[0].length>newReversedLength?`${trnsState[0].length-newReversedLength} new transction(s) to show`:``}</p>
            <table id="transToShow"></table>
            
        </div>
        </div>
    )
}

export default Account;