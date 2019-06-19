const request = require('request');

exports.getinventory =  (appid, steamid, contextid) => {
    return new Promise((resolve, reject) => {
        if(typeof appid !== 'number'){
            appid = 730;
        }
        if(!contextid){
            contextid = 2;
        }
        if(typeof contextid === 'string'){
            contextid = parseInt(contextid);
        }
        request({
            uri: `/inventory/${steamid}/${appid}/${contextid}`,
            baseUrl: 'https://steamcommunity.com/',
            json: true,
        }, (err, res, body) => {
            if(!body) return reject(`Please provide a steamid that exists, you provided value ${steamid}`);
            let items = body.descriptions;
            let assets = body.assets
            let marketnames = [];
            let assetids = [];
            let data = {
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
                return reject("Couldn't find any items in the inventory of the appid you set. :(");
            }
    
            if(err) return reject(err);
            resolve(data);
        });
    })
   
}