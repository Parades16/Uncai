const axios = require('axios');

/**
 * Fetch images from one or more APIs and send each URL to corresponding Discord webhooks.
 * @param {string} webhookUrls 
 * @param {string} apiUrls 
 * @param {number} numberOfImages 
 * @param {string} [method='GET'] 
 */
async function sendImages(webhookUrls, apiUrls, numberOfImages, method = 'GET') {
  // parse comma-separated lists
  const hooks = webhookUrls.split(',').map(u => u.trim()).filter(Boolean);
  const apis  = apiUrls.split(',').map(u => u.trim()).filter(Boolean);
  const pairs = Math.min(hooks.length, apis.length);

  if (pairs === 0) {
    console.error('Uncai error: No valid webhook or API URLs provided.');
    return;
  }

  for (let j = 0; j < pairs; j++) {
    const webhookUrl = hooks[j];
    const apiUrl     = apis[j];
    console.log(`\n[Uncai] Fetching ${numberOfImages} images from ${apiUrl}`);

    try {
      const response = await axios({
        method: method.toUpperCase(),
        url: apiUrl,
        data: { numberOfImages },
        params: method.toUpperCase() === 'GET' ? { limit: numberOfImages } : {},
      });

      const images = response.data?.images;
      if (!images || images.length === 0) {
        console.warn(`Uncai warning: no images returned from ${apiUrl}`);
        continue;
      }

      for (let i = 0; i < Math.min(numberOfImages, images.length); i++) {
        const url = images[i].url;
        await axios.post(webhookUrl, { content: url });
        console.log(`Uncai: sent image ${i + 1} to webhook ${j + 1}`);
      }
    } catch (err) {
      console.error(`Uncai error for webhook ${j + 1}:`, err.message);
    }
  }
}

module.exports = sendImages;
