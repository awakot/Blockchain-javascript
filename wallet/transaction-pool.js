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
}

module.exports = TransactionPool;