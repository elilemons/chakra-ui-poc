export type Transaction = {
  currencyCode: string;
  id: string;
  name: string;
  customerNumber: string;
  description: string;
  status:  'open'| 'paid'| 'inactive'| 'due',
  rate: number;
  balance: number;
  deposit: number;
}

