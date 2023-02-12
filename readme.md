# Uncai

A simple package for sending webhooks with interval time and desired data from API endpoint.

## Installation

You can install the package using npm:
```js
npm i uncai
```


## Usage

You can use the package as follows:

```javascript
const runWebhook = require('uncai');
const axios = require('axios');

const webhookUrl = 'DISCORD_WEBHOOK';
const apiEndpoint = 'API_LINK';
const desiredData = ['?']; //url etc
const intervalTime = ?; //time to send the message in sec

runWebhook(webhookUrl, apiEndpoint, desiredData, intervalTime);
```

**The code above will send a webhook with desired data from API endpoint every intervalTime seconds to the specified webhookUrl.**

**Contributing**

We welcome contributions to this project. If you have any ideas or found any bugs, feel free to open an issue or a pull request.

