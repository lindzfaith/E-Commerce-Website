import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client';

const FooterBottom = ( {footerBottom: {
  discount, largerText, largeText, sale, smallText, midText, desc,
  buttonText, image
}} ) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <h2>{discount}</h2>
          <h3>{largeText}</h3>
          <h3>{largerText}</h3>
        </div>
        <div className="right">
          <h3>{smallText}</h3>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={'product/${product}'}>
            <button type="button">{buttonText}
            </button>
          </Link>
        </div>

        <img 
        src={urlFor(image)}
        className="footer-banner-image"
        />

      </div>

    </div>
  )
}

export default FooterBottom