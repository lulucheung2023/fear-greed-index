# Fear and Greed Index & Bitcoin Price

这个项目提供一个简单的方法，可以从 [alternative.me](https://alternative.me/crypto/fear-and-greed-index/) 获取 Fear and Greed 指数，从 `coinprice` 库获得比特币价格。

## 设置

首先，你需要安装 Node.js。该项目需要 Node.js 的版本8 或者更新的版本来运行。

然后，通过 NPM 安装项目所依赖的库：

```sh
npm install
```

## 使用

在 `main.js` 文件中，我们导入了 `FearAndGreedIndex` 类，并创建了一个新的实例，然后调用 `getFearAndGreedIndex` 和 `getBTCPrice` 方法获取 Fear and Greed 指数以及比特币价格。

你可以在你的 node.js 程序中使用以下代码引入：

```javascript
const { FearAndGreedIndex } = require('./fear-greed-index.js')

const main = async () => {
  const apiClient = new FearAndGreedIndex('https://api.alternative.me');
  const indexData = await apiClient.getFearAndGreedIndex();
  console.log(indexData);
  const BTCPrice = await apiClient.getBTCPrice();
  console.log(`Current BTC price is: ${BTCPrice}`);
}

main();
```

在项目根目录运行：

```sh
node main.js
```

将根据你的网络速度，短时间内在控制台打印出 Fear and Greed 指数和比特币价格。

## 问题

如果你在使用过程中遇到任何问题，欢迎提出 issue。

## 贡献

欢迎对项目进行贡献。在提交代码前，请确保测试通过。

## 许可

这个项目使用 MIT 许可。详见 [LICENSE](LICENSE) 文件。