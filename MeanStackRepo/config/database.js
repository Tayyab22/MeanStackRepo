
//crypto
// Asynchronous
const crypto = require('crypto');

let cryptedMsg = crypto.randomBytes(256).toString('hex');

module.exports = {
    uri: 'mongodb://localhost:27017/' + this.db,
    secret: cryptedMsg,
    db: 'mean-angular-2'
}