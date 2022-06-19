export interface Coin {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank?: number;
  image?: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume?: number;
}
export type CompareItem = (CoinItem | IsSelected)