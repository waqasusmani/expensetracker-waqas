import React, {useState, useContext} from 'react';
import allTransactions from './AllTransactions';
import transactionsContext from './transactionsContext';


function Balance() {
    var transactions = useContext(transactionsContext);
    // var checkInflow = 0;
    // function updateBalance(){
        
    //     transactions[0].map((val, index)=>{
    //         checkInflow+=parseFloat(Object.values(val))
    //     })
    //     console.log(checkInflow)
        
    // }

    return (
        <div className="Balance">
            {/* <button onClick={updateBalance}>Update Balance</button> */}
            {/* <p>{checkInflow}</p> */}
            <Inflow />
            <Outflow totaloutflow={99000}/>    
        </div>
    )
}

function Inflow() {
    // var transactions = useContext(transactionsContext);
    var totalInflows=0;
    for (var i=0;i<allTransactions.length;i++){
        if (allTransactions[i].inflow) {
            totalInflows+=parseFloat(allTransactions[i]["inflow"]);
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

function Outflow(props) {
    // var transactions =useContext(transactionsContext);
    var totalOutflows=0;
    for (var i=0;i<allTransactions.length;i++){
        if (allTransactions[i].outflow) {
            totalOutflows+=parseFloat(allTransactions[i]["outflow"]);
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