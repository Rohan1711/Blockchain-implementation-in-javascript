const express = require('express');

const Blockchainapp = express();
Blockchainapp.get('/',(req,res) => res.send('i m modifed response of program'));

Blockchainapp.listen('5000',() => console.log("server started at port number 5000"));