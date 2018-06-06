const request = require('request');

exports.getinventory = function (appid, steamid, callback){
    if(typeof appid != 'number'){
        appid = 730;
    }
    request({
        uri: '/inventory/'+steamid+'/'+appid+'/2',
        baseUrl: 'https://steamcommunity.com/',
        json: true,
    }, function(err, res, body){
        if(err) throw err;
        callback(null, res, body);
    });
}