import TransactionFields from '../enums/TransactionFields';
import CategoryFields from '../enums/CategoryFields';

export interface TransactionRequest {
  [TransactionFields.AMOUNT]: number;
  [TransactionFields.CATEGORY_ID]: string;
  [TransactionFields.NOTE]: string;
  [TransactionFields.CREATED_AT]: string;
  [TransactionFields.CREATED_BY]?: string;
}
export interface TransactionResponse {
  id: string;
  [TransactionFields.AMOUNT]: number;
  [TransactionFields.CATEGORY_ID]: string;
  [TransactionFields.NOTE]: string;
  [TransactionFields.CREATED_AT]: string;
  [TransactionFields.CREATED_BY]?: string;
  categories: {
    [CategoryFields.NAME]: string;
    [CategoryFields.COLOR]: string;
    [CategoryFields.ICON]: string;
  };
}
