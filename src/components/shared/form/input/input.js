import React, { Fragment, PureComponent } from 'react';
import { string, bool } from 'prop-types';
import {
  Help,
  Input as BulmaInput,
  Textarea,
} from 'react-bulma-components/lib/components/form';

import AddressInput from './address';

class Input extends PureComponent {
  static propTypes = {
    error: string,
    touched: bool,
  };

  render() {
    const { error, touched, ...props } = this.props;

    const errorState = error && touched;

    return (
      <Fragment>
        <BulmaInput color={errorState ? 'danger' : ''} {...props} />
        {error && touched && <Help color="danger">{error}</Help>}
      </Fragment>
    );
  }
}

Input.Address = AddressInput;
Input.Textarea = Textarea;

export default Input;
