import React from 'react'

import { client } from '../lib/client';
import { Product, FooterBottom, HeroBanner}
from '../components';

const Home = ( { products, bannerInfo } ) => (
    <div>
      <HeroBanner heroBanner = {bannerInfo.length && bannerInfo[0]} />

      <div className="products-heading">
        <h2> Choose Your Fighter </h2>
      </div>

      <div className="products-container">
        {products?.map(
          (product) => <Product key=
          {product._id} product={product} /> )}
      </div>

      <FooterBottom footerBottom={bannerInfo && bannerInfo[0]}/>
    </div>
  );

  export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    const bannerQuery = '*[_type == "banner"]';
    const bannerInfo = await client.fetch(bannerQuery);

    return {
      props: { products, bannerInfo }
    }
  }

export default Home;
