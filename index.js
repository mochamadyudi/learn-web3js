var Tx = require('ethereumjs-tx')
const Web3 = require('web3')
// const Buffer = require("buffer");
const web3 = new Web3('http://127.0.0.1:7545')

const account1 = "0x554959a2BE87F75bF4DC381faC0507cd89CFB01E"
const account2 = "0xfEF24C73018fF004eB892222899507E380138920"

const privateKey1 = Buffer.from(`${process.env.PRIVATE_KEY_1}`)
const privateKey2 = Buffer.from(`${process.env.PRIVATE_KEY_2}`)

web3.eth.getBalance(account1, (err, bal) => {
    console.log("account 1 Balance : ", bal, err, web3.utils.fromWei('', "ether"))
})
web3.eth.getBalance(account2, (err, bal) => {
    console.log("account 2 Balance : ", bal, err, web3.utils.fromWei('', "ether"))
})

web3.eth.getTransactionCount(account1, (err, txCount) => {
    //Build the transaction
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    }

    console.log(Tx(txObject))
    //sign the transaction
    // const tx = new Tx(txObject)
    // tx.sign(privateKey1)
    //
    // const serializedTransaction = tx.serialize
    //
    // const raw = '0x' + serializedTransaction.toString('hex')

    // Broadcast the transaction
    // web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    //     console.log('txHash : ', txHash)
    // })
})
