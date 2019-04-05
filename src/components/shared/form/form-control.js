import React, { PureComponent } from 'react';
import { node, string } from 'prop-types';

import {
  Control,
  Field,
  Label,
} from 'react-bulma-components/lib/components/form';

class FormControl extends PureComponent {
  static propTypes = {
    children: node.isRequired,
    label: string.isRequired,
  };

  render() {
    const { children, label } = this.props;

    return (
      <Field horizontal>
        <Field.Label className="is-normal">
          <Label className="has-text-left">{label}</Label>
        </Field.Label>
        <Field.Body>
          <Field>
            <Control>{children}</Control>
          </Field>
        </Field.Body>
      </Field>
    );
  }
}

export default FormControl;
