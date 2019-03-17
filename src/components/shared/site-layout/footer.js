import React from 'react';
import { css } from 'linaria';
import Footer from 'react-bulma-components/lib/components/footer';

const footerClasses = css`
  padding: 20px !important;
`;

const SiteFooter = () => {
  return (
    <Footer className={footerClasses}>
      <p className="has-text-centered">
        © 2018 Grant Center. All Rights Reserved.
      </p>
    </Footer>
  );
};

export default SiteFooter;
