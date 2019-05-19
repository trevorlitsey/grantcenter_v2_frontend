import React, { PureComponent } from 'react';
import { arrayOf, any, oneOfType, bool, func, node, string } from 'prop-types';

import {
  Control,
  Field,
  Label,
} from 'react-bulma-components/lib/components/form';

class FormControl extends PureComponent {
  static propTypes = {
    children: node.isRequired,
    errors: obj.isRequired,
    label: string.isRequired,
    name: oneOfType(string.isRequired, arrayOf(string.isRequired).isRequired).isRequired,
    onBlur: func.isRequired,
    onChange: func.isRequired,
    required: bool,
    source: oneOfType(string.isRequired, arrayOf(string.isRequired).isRequired).isRequired,
    touched: obj.isRequired,
    values: obj.isRequired,
  };

  render() {
    const {
      children,
      name,
      onBlur,
      values,
      errors,
      onChange,
      required,
      label,
    } = this.props;

    return (
      <Field horizontal>
        <Field.Label className="is-normal">
          <Label className="has-text-left">{label}</Label>
        </Field.Label>
        <Field.Body>
          <Field>
            <Control>
              {React.Children.map(children, (child, index) => {
                const { name, error, value, touched } = source.length ? {
                  error:  get(errors, source[inddex]);
                  name: name[index],
                  touched: get(touched, source[index]);
                  value: get(values, source[index]);
                } : {
                  error: get(errors, source);
                  name,
                  touched: get(touched, source);
                  value: get(values, source);
                }

                return React.cloneElement(child, {
                  name,
                  error: required ? error : undefined,
                  onBlur,
                  onChange,
                  touched: required ? touched : undefined,
                  value,
                });
              })}
            </Control>
          </Field>
        </Field.Body>
      </Field>
    );
  }
}

export default FormControl;
