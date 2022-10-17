import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ( { product: { image, name, slug, price }  } ) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={300}
            height={300}
            className="product-image"
          />
          <h2 className="product-name">{name}</h2>
          <h4 className="product-price">${price}</h4>
        </div>
      </Link>
    </div>
  )
}

export default Product