// index.js
const axios = require('axios');

async function sendImages(webhookUrl, apiUrl, numberOfImages, method = 'GET') {
  try {
    const response = await axios({
      method: method.toUpperCase(), // Ensure method is uppercase
      url: apiUrl,
      data: { numberOfImages }, // For POST requests, send data in the request body
      params: method.toUpperCase() === 'GET' ? { limit: numberOfImages } : {}, // For GET requests, send params
    });

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

module.exports = sendImages;
