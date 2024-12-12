const EC = require("elliptic").ec
const ec = new EC('secp256k1')

const keyPair = ec.genKeyPair();
const privateKey = keyPair.getPrivate('hex')
const publicKeyUncompressed = keyPair.getPublic(false, 'hex')
const publicKeyCompressed = keyPair.getPublic(true, 'hex')

console.log("Private Key:", privateKey);
console.log("Public Key (Uncompressed):", publicKeyUncompressed);
console.log("Public Key (Compressed):", publicKeyCompressed);