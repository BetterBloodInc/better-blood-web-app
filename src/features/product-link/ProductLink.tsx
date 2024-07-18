import React from 'react'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PRODUCTS_MAP } from '~src/constants/products'
import { ProductId } from '~src/types/product-types'

export function ProductLink({
  productId,
}: {
  productId: ProductId
}): JSX.Element {
  const product = PRODUCTS_MAP[productId]
  if (!product) {
    return <div>Product not found</div>
  }
  return (
    <a
      href={product.link}
      target="_blank"
      rel="noreferrer"
      style={{ fontSize: 14 }}
    >
      {product.name} - {product.price} {product.priceCurrency}{' '}
      <FontAwesomeIcon icon={faExternalLink} style={{ fontSize: 12 }} />
    </a>
  )
}
