const steaminventory = require('./index.js');
var steamid = '76561198089544929';
steaminventory.getinventory(730, steamid, '2').then(data => {
    console.log(data.marketnames);
}).catch(err => console.log(err));
