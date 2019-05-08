import React, { Fragment, PureComponent } from 'react';
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

class SiteLayout extends PureComponent {
  render() {
    const { children, ...props } = this.props;

    return (
      <Fragment>
        <Helmet
          meta={[
            {
              content: 'a modern grants manager for non-profit applicants',
              name: 'description',
            },
            { content: 'grants, fundraising', name: 'keywords' },
          ]}
          title="Grant Center"
        >
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-114939328-2"
          />
          <link href={favicon} rel="icon" type="image/x-icon" />
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
  }
}

export default SiteLayout;
