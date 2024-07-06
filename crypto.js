const crypto=require('crypto')
const hash=crypto.createHash('sha256');
hash.update('kalki2898');
console.log(hash.digest('hex'));