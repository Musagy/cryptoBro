import { defineStore } from "pinia";
import { Coin } from "../App";

const getDollar = (): Coin => ({
  id: "dollar",
  name: "Dólar",
  symbol: "USD",
  current_price: 1,
  price_change_percentage_24h: 0,
});
const allCoinsApi =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

export type CompareItem = { coin: Coin; input: boolean };
export const useCoinsStore = defineStore("Coins", {
  state: (): {
    allCoins: Coin[];
    search: string;
    coins: Coin[];
    compare: CompareItem[];
  } => ({
    allCoins: [],
    search: "",
    coins: [],
    compare: [
      {
        coin: getDollar(),
        input: false,
      },
      {
        coin: getDollar(),
        input: false,
      },
    ],
  }),

  actions: {
    async getCoins() {
      const response = await fetch(allCoinsApi);
      const allCoins = await response.json();
      this.allCoins = allCoins;
      this.coins = this.allCoins;
    },
    searchCoins() {
      // this.search = search;
      if (this.search !== "") {
        this.coins = this.allCoins.filter((coin: Coin) => {
          const searchLower = this.search.toLowerCase();
          const coinNameLower = coin.name.toLowerCase();
          const coinSymbolLower = coin.symbol.toLowerCase();
          if (
            coinNameLower.includes(searchLower) ||
            coinSymbolLower.includes(searchLower)
          ) {
            return coin;
          }
        });
      } else {
        this.coins = this.allCoins;
      }
    },
    addCoin(coin: Coin, index: 0 | 1) {
      if (coin) {
        this.compare[index].coin = coin;
      }
    },
    clearASocket(index: 0 | 1) {
      this.compare[index].coin = getDollar();
    },
    switchSocket() {
      const temp = this.compare[0].coin;
      this.compare[0].coin = this.compare[1].coin;
      this.compare[1].coin = temp;
    },
    openInput(index: 0 | 1) {
      this.compare[index].input = true;
    },
    closeInput(index: 0 | 1) {
      this.compare[index].input = false;
    },
  },
});
