import React from 'react';
import allTransactions from './AllTransactions';



function Balance() {
    return (
        <div className="Balance">
            <Inflow />
            <Outflow />    
        </div>
    )
}

function Inflow() {
    var totalInflows=0;
    for (var i=0;i<allTransactions.length;i++){
        if (allTransactions[i].inflow) {
            totalInflows+=parseFloat(allTransactions[i]["inflow"][1]);
        }
    }
    console.log("totalInflows: "+totalInflows);
    return (
        <div className="Total-inflow">
            <h3>Total inflow</h3>
            <p>$ {totalInflows}</p>
        </div>
    )
}

function Outflow() {
    var totalOutflows=0;
    for (var i=0;i<allTransactions.length;i++){
        if (allTransactions[i].outflow) {
            totalOutflows+=parseFloat(allTransactions[i]["outflow"][1]);
        }
    }
    console.log("totalOutflows: "+totalOutflows);
    return (
        <div className="Total-outflow">
            <h3>Total outflow</h3>
            <p>$ {totalOutflows}</p>
        </div>
    )
}

export default Balance;