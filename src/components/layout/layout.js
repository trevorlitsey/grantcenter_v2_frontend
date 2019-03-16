import React from 'react';
import Helmet from 'react-helmet';

import favicon from '../../images/favicon.png';
import Nav from './nav';
import Footer from './footer';

import 'react-bulma-components/src/index.sass';

const SiteLayout = ({ children }) => {
  return (
    <div className="wrapper--site">
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
      <div className="children--site">{children}</div>
      <Footer />
    </div>
  );
};

export default SiteLayout;
