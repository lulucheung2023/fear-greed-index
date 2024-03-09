const { FearAndGreedIndex } = require('./fear-greed-index.js')

const main = async () => {
  const apiClient = new FearAndGreedIndex('https://api.alternative.me');
  const indexData = await apiClient.getFearAndGreedIndex();
  console.log(indexData);
  const BTCPrice = await apiClient.getBTCPrice();
  console.log(`Current BTC price is: ${BTCPrice}`);
}

main();