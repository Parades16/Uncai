const axios = require('axios');

async function sendImages(webhookUrl, apiUrl, numberOfImages, method = 'GET') {
  try {
    let response;
    if (method.toUpperCase() === 'GET') {
      response = await axios.get(`${apiUrl}&limit=${numberOfImages}`);
    } else if (method.toUpperCase() === 'POST') {
      response = await axios.post(apiUrl, { numberOfImages });
    } else {
      throw new Error('Unsupported HTTP method. Only GET and POST are supported.');
    }

    if (response.data && response.data.images && response.data.images.length > 0) {
      for (let i = 0; i < numberOfImages; i++) {
        const url = response.data.images[i].url;
        await axios.post(webhookUrl, { content: url });
        console.log(`Image ${i + 1} sent to webhook successfully.`);
      }
    } else {
      throw new Error('No images found in the API response.');
    }
  } catch (error) {
    console.error('Error sending images to webhook:', error.message);
  }
}

module.exports = {
  sendImages
};
