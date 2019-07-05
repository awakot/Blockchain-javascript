const Transaction = require('../wallet/transaction')

class TransactionPool{
    constructor(){
        this.transactions = [];
    }


    updateOrAddTransaction(transaction){
        let transacrionWithId = this.transactions.find(t => t.id === transaction.id);

        if(transacrionWithId) {
            this.transactions[this.transactions.indexOf(transacrionWithId)] = transaction;
        }else{
            this.transactions.push(transaction);
        }
    }

    existingTransaction(address){
        return this.transactions.find(t => t.input.address === address);
    }

    validTransaction(){
        return this.transactions.filter(transaction => {
            const outputTotal = transaction.outputs.reduce((total, output) =>{
                return total + output.amount;
            }, 0);
            if (transaction.input.amount !== outputTotal){
                console.log(`Invalid transaction from ${transaction.input.address}.`);
                return;
            }

            if(!Transaction.verifyTransaction(transaction)){
                console.log(`Invalid sigunature from ${transaction.input.address}.`);
                return;
            }
        });
    }

    clear(){
        this.transactions = [];
    }
}

module.exports = TransactionPool;