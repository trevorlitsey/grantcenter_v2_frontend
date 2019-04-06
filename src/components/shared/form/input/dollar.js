import React, { PureComponent } from 'react';
import { string, bool } from 'prop-types';
import { Input } from 'react-bulma-components/lib/components/form';

import Button from 'react-bulma-components/lib/components/button';
import { Control, Field } from 'react-bulma-components/lib/components/form';

import InputWrapper from './input-wrapper';

class Dollar extends PureComponent {
  static propTypes = {
    error: string,
    touched: bool,
  };

  render() {
    const { error, touched, ...props } = this.props;

    return (
      <InputWrapper error={error} touched={touched}>
        <Field kind="addons">
          <Control>
            <Button isStatic>$</Button>
          </Control>
          <Control>
            <Input color={error && touched ? 'danger' : ''} {...props} />
          </Control>
        </Field>
      </InputWrapper>
    );
  }
}

export default Dollar;
