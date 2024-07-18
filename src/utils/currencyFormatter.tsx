export const currencyFormatter = (amount: number, currencyCode: string) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: currencyCode
}).format(amount);
