import { create } from "zustand";

interface MarketState {
    cash: number;
    portfolio: Record<string, number>; // ticker → shares
    buy: (ticker: string, qty: number, price: number) => void;
}

export const useMarketStore = create<MarketState>(
  (
    set: (
      arg0: (s: MarketState) => {
        cash: number;
        portfolio: { [x: string]: number };
      },
    ) => any,
  ) => ({
    cash: 10_000,
    portfolio: {},
    buy: (ticker: string, qty: number, price: number) =>
      set((s: MarketState) => ({
        cash: s.cash - qty * price,
        portfolio: {
          ...s.portfolio,
          [ticker]: (s.portfolio[ticker] ?? 0) + qty,
        },
      })),
  }),
);
