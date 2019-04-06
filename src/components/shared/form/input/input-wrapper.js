import React, { Fragment, PureComponent } from 'react';
import { node, string, bool } from 'prop-types';

import { Help } from 'react-bulma-components/lib/components/form';

class InputWrapper extends PureComponent {
  static propTypes = {
    children: node.isRequired,
    error: string,
    touched: bool,
  };

  render() {
    const { children, error, touched } = this.props;

    return (
      <Fragment>
        {children}
        {error && touched && <Help color="danger">{error}</Help>}
      </Fragment>
    );
  }
}

export default InputWrapper;
