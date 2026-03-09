export enum ProductId {
  Whoop = 'Whoop',
}

export interface Product {
  id: string
  name: string
  description: string
  link: string
  price?: number
  priceCurrency?: string
}
