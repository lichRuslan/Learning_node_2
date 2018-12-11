var User = require('./user');
var db = require('db');
db.connect();
function run(){
    var vasa = new User("Вася");
    var petia = new User("Petia");

    vasa.hello(vasa);
    console.log(db.getPhrase("Run seccessful"));
}
if (module.perent){
    exports.run = run;
}else {
    run();
}