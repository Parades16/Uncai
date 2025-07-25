# Uncai

This Node.js module fetches image URLs from one or more APIs and sends them to their corresponding Discord webhooks—fully automated and parallel-mapped.

# New

* More than 1 api and webhooks can be used
* Optimised





## Installation

You can install the package using npm:
```js
npm i uncai
```


## Usage

You can use the package as followed:

```javascript
const sendImages = require('uncai');
const axios = require("axios")

const webhooks = [
'https://discord.com/api/webhooks/../..',
'https://discord.com/api/webhooks/../..',
'https://discord.com/api/webhooks/../..', //and so on
].join(',');



const apis = [
  'api1',
  'api2', //and so on
].join(',');

const numberOfImages = x;  // how many images per apis endpoint
const method  = 'GET'; //GET, URL etc 

sendImages(webhooks, apis, numberOfImages, method)

```

**Contributing**

We welcome contributions to this project. If you have any ideas or found any bugs, feel free to open an issue or a pull request.

