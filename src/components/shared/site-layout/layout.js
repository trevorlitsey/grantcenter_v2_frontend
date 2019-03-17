import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { styled } from 'linaria/react';
import Hero from 'react-bulma-components/lib/components/hero';

import favicon from '../../../images/favicon.png';
import Nav from './nav';
import SiteFooter from './footer';

import 'react-bulma-components/src/index.sass';

const ChildrenWrapper = styled.div`
  flex: 1;
`;

const SiteLayout = ({ children, ...props }) => {
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
      <Hero size="fullheight">
        <Hero.Head renderAs="header">
          <Nav />
        </Hero.Head>
        <ChildrenWrapper {...props}>{children}</ChildrenWrapper>
        <Hero.Footer>
          <SiteFooter />
        </Hero.Footer>
      </Hero>
    </Fragment>
  );
};

export default SiteLayout;
