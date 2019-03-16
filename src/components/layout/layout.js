import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import favicon from '../../images/favicon.png';
import Nav from './nav';
import SiteFooter from './footer';

import 'react-bulma-components/src/index.sass';

const SiteLayout = ({ children }) => {
  return (
    <Fragment>
      <Helmet
        title="Grant Center"
        meta={[
          {
            name: 'description',
            content: 'a modern grants manager for non-profit applicants',
          },
          { name: 'keywords', content: 'grants, fundraising' },
        ]}
      >
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-114939328-2"
        />

        <link rel="icon" href={favicon} type="image/x-icon" />
      </Helmet>
      <script
        dangerouslySetInnerHTML={{
          __html: `

           window.dataLayer = window.dataLayer || []
           function gtag() {
           dataLayer.push(arguments)
           }
           gtag('js', new Date())
 
           gtag('config', 'UA-114939328-2')
         
         `,
        }}
      />
      <Nav />
      {children}
      <SiteFooter />
    </Fragment>
  );
};

export default SiteLayout;
