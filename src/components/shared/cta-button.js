import React, { PureComponent } from 'react';
import { node, string } from 'prop-types';

import Button from 'react-bulma-components/lib/components/button';

import Link from './link';

class CTAButton extends PureComponent {
  static propTypes = {
    children: node.isRequired,
    to: string.isRequired,
  };

  render() {
    const { children, to, ...props } = this.props;

    return (
      <Button renderAs={Link} to={to} {...props}>
        {children}
      </Button>
    );
  }
}

CTAButton.Create = props => (
  <CTAButton color="link" {...props}>
    New
  </CTAButton>
);

CTAButton.Edit = props => <CTAButton {...props}>Edit</CTAButton>;

export default CTAButton;
