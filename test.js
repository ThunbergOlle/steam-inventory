const steaminventory = require('./index.js');
var steamid = '76561198089544929';
steaminventory.getinventory(730, steamid, function(err, data){
    if(err) throw err;
    console.log(data.marketnames);
}, '2');
