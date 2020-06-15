import React, {useContext} from 'react';
import allTransactions from './AllTransactions';
import transactionsContext from './transactionsContext';



function Transaction() {

    var transactions = useContext(transactionsContext);

    function recordInflow(){
        if (!isNaN(parseFloat(document.getElementById("amount").value))){
            allTransactions.push({"inflow":parseFloat(document.getElementById("amount").value)});
            transactions[1](JSON.parse(JSON.stringify(allTransactions)));
            console.log(transactions[0])
        }
        else {
            alert("Please enter a valid amount")
        }
    }
    function recordOutflow(){
        if (!isNaN(parseFloat(document.getElementById("amount").value))){
            allTransactions.push({"outflow":parseFloat(document.getElementById("amount").value)});
            transactions[1](JSON.parse(JSON.stringify(allTransactions)));
            console.log(transactions[0])
        }
        else {
            alert("Please enter a valid amount")
        }

    }

   return (
        <div className="Transaction">
            <h2>Enter new transaction here:</h2>
            <div className="amount">
                <label htmlFor="amount">Amount: </label> 
                <input type="tel" name="amount" id="amount"/>
                <input type="button" value="Reset" id="reset" onClick={()=>document.getElementById("amount").value=""}/>
                <br></br>
            </div>
            <div className="type">
                <label htmlFor="type">Type: </label> 
                <input id="inflow" type="button" value="Inflow" onClick={recordInflow}/>
                <input id="outflow" type="button" value="Outflow" onClick={recordOutflow}/>
                <br></br>
            </div>
        </div>
    )
}

export default Transaction;

