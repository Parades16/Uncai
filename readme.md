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
const sendImages = require("uncai");

const webhookUrl = ''; //webhook url
const apiUrl = ''; //api url
const method = 'GET'; // or 'POST' if desired
const numberOfImagesToSend = ; //no of images to be sent

sendImages(webhookUrl, apiUrl, numberOfImagesToSend, method);

```

**The code above will send a webhook with desired data from API endpoint every intervalTime seconds to the specified webhookUrl.**

**Contributing**

We welcome contributions to this project. If you have any ideas or found any bugs, feel free to open an issue or a pull request.

