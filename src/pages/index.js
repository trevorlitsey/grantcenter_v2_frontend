import React from 'react';

import SiteLayout from '../components/shared/site-layout';
import ProductInfo from '../components/index/product-info';
import SignUpNow from '../components/index/sign-up-now';

import './index.css';

const IndexPage = () => (
  <SiteLayout className="background--blue">
    <div className="container--index">
      <SignUpNow />
      <ProductInfo />
    </div>
  </SiteLayout>
);

export default IndexPage;
