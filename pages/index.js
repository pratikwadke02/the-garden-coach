import React from 'react';
import {client} from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';


const Home = ({products, bannerData}) => {
  return (
    <>
    <HeroBanner heroBanner = {bannerData.length && bannerData[0]}/>
    {console.log(bannerData)}
    <div className='products-heading'>
      <h2>Our Products</h2>
      <p>Designing Services of many variations</p>
    </div>
    <div className="marquee">
    <div className='maylike-products-container track'>
      {products?.map((product) => <Product key = {product._id} product ={product} />)}
    </div>
    </div>
    <div>
    <FooterBanner footerBanner={
      bannerData && bannerData[0]
    }/>
    </div>
    
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  console.log(bannerData);

  if(!products || !bannerData) {
    return {
    props: {products: [], bannerData: []}
    }
  }else{
    return {
      props: {
        products,
        bannerData
      }
    }
  }
}

export default Home;
