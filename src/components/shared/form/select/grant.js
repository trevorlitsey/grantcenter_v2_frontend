import React, { PureComponent } from 'react';
import { arrayOf, func, shape, string } from 'prop-types';

import Select from './select';

class GrantSelect extends PureComponent {
  static propTypes = {
    grants: arrayOf(
      shape({
        id: string.isRequired,
        name: string.isRequired,
      })
    ),
    onBlur: func.isRequired,
    onChange: func.isRequired,
    value: shape({
      id: string,
      name: string,
    }),
  };

  static defaultProps = {
    grants: [
      {
        id: '1',
        name: 'Grant One',
      },
      {
        id: '2',
        name: 'Grant Two',
      },
    ],
    value: {},
  };

  handleOnCreate = value => {
    return new Promise(res =>
      setTimeout(
        () =>
          res({
            id: Date.now(),
            name: value.name,
          }),
        1000
      )
    );
  };

  render() {
    const { grants, value, onChange, onBlur, ...props } = this.props;

    return (
      <Select
        {...props}
        items={grants}
        name="grant"
        onBlur={onBlur}
        onChange={onChange}
        onCreate={this.handleOnCreate}
        value={value}
      />
    );
  }
}

export default GrantSelect;
