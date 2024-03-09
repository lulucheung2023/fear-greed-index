const axios = require('axios');
const coinprice = require('coinprice');

const BASE_URL = 'https://api.alternative.me';

class FearAndGreedIndex {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.indexEndpoint = '/fng/?limit=1';
  }

  async fetchFromAPI(endpoint) {
    try {
      const response = await axios.get(`${this.baseURL}${endpoint}`);
      return response.data;
    } catch (error) {
      console.error(`Error: ${error}`);
      throw error;
    }
  }

  async getFearAndGreedIndex() {
    const data = await this.fetchFromAPI(this.indexEndpoint);

    if (!data || !data.data || !Array.isArray(data.data) || data.data.length === 0) {
      console.error('No Fear & Greed Index data could be loaded.');
      return null;
    }

    const latestIndex = data.data[0];

    return {
      name: latestIndex.name,
      value: latestIndex.value,
      valueClassification: latestIndex.value_classification,
      timestamp: latestIndex.timestamp,
    };
  }

  async getBTCPrice() {
    try {
      const BTCPrice = await coinprice.getCoinPrice('bitcoin');
      return BTCPrice;
    } catch (error) {
      console.error(`Error getting BTC price: ${error}`);
      throw error;
    }
  }
}

module.exports = {
  FearAndGreedIndex
}