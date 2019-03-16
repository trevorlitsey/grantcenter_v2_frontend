import React from 'react';

import Layout from '../components/layout';
import ProductInfo from '../components/index/product-info';
import SignUpNow from '../components/index/sign-up-now';

import './index.css';

const IndexPage = () => (
  <Layout>
    <div className="background--blue">
      <div className="container--index">
        <SignUpNow />
        <ProductInfo />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
