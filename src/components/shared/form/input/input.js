import React, { PureComponent } from 'react';
import { string, bool } from 'prop-types';
import {
  Input as BulmaInput,
  Textarea,
} from 'react-bulma-components/lib/components/form';

import AddressInput from './address';
import DollarInput from './dollar';
import InputWrapper from './input-wrapper';

class Input extends PureComponent {
  static propTypes = {
    error: string,
    touched: bool,
  };

  render() {
    const { error, touched, type, ...props } = this.props;

    const styles = {
      width: type === 'date' ? 'auto' : undefined,
    };

    return (
      <InputWrapper error={error} touched={touched}>
        <BulmaInput
          color={error && touched ? 'danger' : null}
          style={styles}
          type={type}
          {...props}
        />
      </InputWrapper>
    );
  }
}

Input.Address = AddressInput;
Input.Dollar = DollarInput;
Input.Textarea = Textarea;

export default Input;
