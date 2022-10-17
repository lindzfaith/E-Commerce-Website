import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client';

const HeroBanner = ( {heroBanner } ) => {
  return (
    <div className="hero-banner-container">
      <div>
      <img src={urlFor(heroBanner.image)} 
        alt="heroes"
        className="hero-banner-image" />
      <p className="heroes">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText}</h1>

      <div>
        <Link href={`/product/${heroBanner.product}`}>
          <button type="button">{heroBanner.buttonText}</button>
      </Link>

        <div className="header">
          <p> {heroBanner.description} </p>
        </div>
      </div>

      </div>
    </div>
  )
}

export default HeroBanner