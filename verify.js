require('dotenv').config()

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const crypto = require('crypto');

const publicKeyCompressed = process.env.PUBLIC_KEY_COMPRESSED
const publicKey = ec.keyFromPublic(publicKeyCompressed, 'hex');

const message = "Hello world from Nihal Kudukkan";
const messageHash = crypto.createHash('sha256').update(message).digest();

try {
    const isValid = publicKey.verify(messageHash, process.env.MESSAGE_SIGNATURE);
    console.log("Is signature valid?", isValid);
} catch (error) {
    console.log("Invalid")       
}