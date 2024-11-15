export type ProductT = {
  productId: number;
  productName: string;
  pricePerUnit: string;
  productAmount?: number;
};
export type StockT = {
  productId: number;
  amount: string;
};
