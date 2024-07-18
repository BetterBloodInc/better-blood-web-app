import { Product, ProductId } from '~src/types/product-types'

export const PRODUCTS_MAP: Record<ProductId, Product> = {
  [ProductId.Whoop]: {
    id: ProductId.Whoop,
    name: 'Whoop',
    description:
      'Whoop is a fitness tracker that helps you optimize your performance and recovery.',
    link: 'https://www.whoop.com/',
    price: 379,
    priceCurrency: 'USD',
  },
}
