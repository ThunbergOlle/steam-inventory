# Get Steam Inventories
Get a users steaminventory of any game. It's easy to use!

**Install**
```js
npm install get-steam-inventory --save
```

**Import**
```js
const steaminventory = require('get-steam-inventory');
```
## Methods
```js
steaminventory.getinventory(appid, steamid, function(err, callback){});
```


## Examples

### Simple Example
```js
const steaminventory = require('get-steam-inventory');
var steamid = '76561198089544929'; //Set up a variable for the steam64 id.
steaminventory.getinventory(730, steamid, function(err, data){ //Making the request. 730 is the APPID, Steamid is already declared. Has a callback named 'data'
    if(err) throw err; //If we get an error then display it.
    console.log(data.body.descriptions); //Log everything we recieved in the data variable.
});
```
**Output**
```js
    appid: 730,
    classid: '1602391316',
    instanceid: '2081167898',
    currency: 0,
    background_color: '', 
    // LOTS OF MORE (AROUND 20 MORE LINES OF INFORMATION)
```
Well, using that example may not be the best thing if you are trying to get something useful out of it.
We recommend this instead:

### Recommended Example
```js
const steaminventory = require('get-steam-inventory');
var steamid = '76561198089544929';//Set up a variable for the steam64 id.
steaminventory.getinventory(730, steamid, function(err, data){//Making the request. 730 is the APPID, Steamid is already declared. Has a callback named 'data'
    if(err) throw err; //Display errors if we recieve them.
    var items = data.body.descriptions; //Sets up variable for all the information that we recieved.
    for (var i = 0; i < items.length; i++){ //Makes a loop for every index in 'items' variable.
        console.log(items[i].market_hash_name); //Logs it into the console.
    }
});
//This one logs EVERY name of the items in the inventory.
```
**Output**
```
Graffiti | Noscope (SWAT Blue)
Graffiti | Rage Mode (SWAT Blue)
Operation Hydra Challenge Coin
Graffiti | Popdog (Dust Brown)
Graffiti | Sheriff (Blood Red)
Graffiti | Bling (Blood Red)
Tec-9 | Urban DDPAT (Battle-Scarred)
```

## License
MIT License

Copyright (c) 2018 Olle Thunberg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.