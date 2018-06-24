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

**VERSION 1.1 CHANGED THE WAY THE MODULE RESPONDS**

We recommend reading the [docs]() on what's changed if you are plannig to update.

## Methods
```js
steaminventory.getinventory(appid, steamid, function(err, callback){}, contextid);
```
- appid: This is the [appid](https://steamdb.info/apps/) for the game that you want to load the inventory items for.
- steamid: This is the [steam64](https://steamid.io/lookup/) id of the user that you want to load.
- callback:
    - err: This is if you get an error back.
    - data: This is the response from the steamservers.
- contextid: Context id is an id set by the game. For valve games it's usually 2.
#### Callbacks
- data.raw: Raw information recieved from the servers.
- data.items: All the information about the items. (Like icon urls, descriptions, name colors ect)
- data.marketnames: All the market names of the items in the inventory returned as a javascript object.
- data.assets: All the information about the assets in the inventory
- data.assetids: Every assetid in the inventory
## Examples

### Get the item names
```js
const steaminventory = require('get-steam-inventory');
var steamid = '76561198089544929'; //Set up a variable for the steam64 id.
steaminventory.getinventory(730, steamid, function(err, data){
    var marketnames = data.marketnames;
    console.log(marketnames);
}, '2');
```
**Output**
```js
[ 'Sealed Graffiti | NaCl (Shark White)',
  'Glove Case',
  'Gamma 2 Case',
  'Chroma 2 Case',
  'AND LOTS OF MORE INFORMATION OR NAMES :)']
```
Well, using that example may not be the best thing if you are trying to get something useful out of it.
We recommend this instead:

### Get raw
```js
const steaminventory = require('get-steam-inventory');
var steamid = '76561198089544929';//Set up a variable for the steam64 id.
steaminventory.getinventory(730, steamid, function(err, data){
    console.log(data.raw);
});
//This one logs EVERY name of the items in the inventory.
```
**Output**
```js
{ appid: 730,
       classid: '1989274437',
       instanceid: '302028390',
       currency: 0,
       background_color: '',
       icon_url: 'IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3Uf
```
### Get assets
```js
const steaminventory = require('get-steam-inventory');
var steamid = '76561198089544929';//Set up a variable for the steam64 id.
steaminventory.getinventory(730, steamid, function(err, data){
    console.log(data.assets);
});
//This one logs EVERY name of the items in the inventory.
```
**Output**
```js
{ appid: 730,
    contextid: '2',
    assetid: '13106527064',
    classid: '1989315922',
    instanceid: '302028390',
    amount: '1' },
  { appid: 730,
    contextid: '2',
```

### Contribute
Feel free to open pullrequests or issues on the [github](https://github.com/ThunbergOlle/steam-inventory) page.
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