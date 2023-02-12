const axios = require('axios');

const runWebhook = async (webhookUrl, apiEndpoint, desiredData, intervalTime) => {
  setInterval(async () => {
    try {
      const response = await axios.get(apiEndpoint);
      let data = response.data;
      for (const key of desiredData) {
        data = data[key];
      }
      const payload = {
        content: data
      };
      await axios.post(webhookUrl, payload);
    } catch (error) {
      console.error(error);
    }
  }, intervalTime * 1000);
};

module.exports = runWebhook;
