require('dotenv').config()

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const crypto = require('crypto');

const message = "Hello world from Nihal Kudukkan";
const messageHash = crypto.createHash('sha256').update(message).digest();

// Sign the hashed message
const privateKey=process.env.PRIVATE_KEY
const key=ec.keyFromPrivate(privateKey)

const signature = key.sign(messageHash);
console.log("Signature:", signature.toDER('hex'));