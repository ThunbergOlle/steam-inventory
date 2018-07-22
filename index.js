const request = require('request');

exports.getinventory = function (appid, steamid, callback, contextid){
    if(typeof appid != 'number'){
        appid = 730;
    }
    if(contextid === undefined){
        contextid = 2;
    }
    if(typeof contextid === "string"){
        contextid = parseInt(contextid);
    }
    request({
        uri: '/inventory/'+steamid+'/'+appid+'/'+contextid,
        baseUrl: 'https://steamcommunity.com/',
        json: true,
    }, function(err, res, body){
        var items = body.descriptions;
        var assets = body.assets
        var marketnames = [];
        var assetids = [];
        var data = {
            raw : body,
            items: items,
            marketnames: marketnames,
            assets : assets,
            assetids: assetids
        }
        if(items !== undefined){
            for (var i = 0; i < items.length; i++){
                marketnames.push(items[i].market_hash_name);
                assetids.push(assets[i].assetid);
            }
        }else if (items === undefined){
            callback("Couldn't find any items in the inventory of the appid you set. :(");
        }

        if(err) throw err;
        callback(null, data);
    });
}