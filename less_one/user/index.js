var db = require('db');
var log = require('logger')(module);

function User(name) {
    this.name = name;    
}
User.prototype.hello = function(whu){
    log(db.getPhrase("lol")+"," + whu.name);
}


module.exports = User;
// console.log(module);