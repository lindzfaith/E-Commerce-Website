import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
      Plushies are not for sale. This website is an example e-commerce site.
      </p>
      <p className="icons">
        <AiFillInstagram/>
        <AiOutlineTwitter/>
      </p>
      
    </div>
  )
}

export default Footer