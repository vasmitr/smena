import axios from "axios";

const ONE_MONTH = 2592000000;
const API_URL = "https://api.bitfinex.com/v2";

export default async function(coin) {
  const urlLastTrade = API_URL + "/candles/trade:1m:tBTCUSD/last";

  const [MTS] = await axios.get(urlLastTrade).then(({ data }) => data);
  var candlesDataUrl;

  if (coin === "BTC") {
    candlesDataUrl =
      API_URL +
      `/candles/trade:1m:tBTCUSD/hist?start=${MTS -
        ONE_MONTH}&end=${MTS}&limit=1000`;
  } else if (coin === "ETH") {
    candlesDataUrl =
      API_URL +
      `/candles/trade:1m:tETHUSD/hist?start=${MTS -
        ONE_MONTH}&end=${MTS}&limit=1000`;
  }
  const data = await axios.get(candlesDataUrl).then(({ data }) => data);
  return data;
}
