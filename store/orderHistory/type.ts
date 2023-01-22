export const ORDER_HISTORY_ALICE = 'orderHistoryAlice' as const;

export type TOrderHistoryItem = {
  id: number;
  num: string;
  price: number;
  oldPrice?: number;
  orderDate: string;
  paymentMethod: string;
  wayToGet: {
    recipient: string;
    pointOfIssue: string;
  };
  status: string;
  deliveryDate: string;
  isPaid: boolean;
  previewImages: any[];
};

export type TOrderHistoryStore = {
  loading: boolean;
  dataSource: TOrderHistoryItem[];
};
