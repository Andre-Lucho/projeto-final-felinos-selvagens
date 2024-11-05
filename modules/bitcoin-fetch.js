export default function BitcoinFetch(url, target) {
  async function fetchBitcoin() {
    try {
      const bitcoinR = await fetch(url);
      const bitcoinJson = await bitcoinR.json();

      const btcPrice = document.querySelector(target);
      btcPrice.innerText = (15 / bitcoinJson.BRL.sell).toFixed(7);
      // doação de R$ 15,00
    } catch (erro) {
      console.log("erro");
    }
  }
  return fetchBitcoin();
}
