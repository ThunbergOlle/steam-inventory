const steaminventory = require('./index.js');
var steamid = '76561198089544929';
steaminventory.getinventory(730, steamid, function(err, data){
    if(err) throw err;
    var items = data.body.descriptions;
    for (var i = 0; i < items.length; i++){
        console.log(items[i].market_hash_name);
    }
});
