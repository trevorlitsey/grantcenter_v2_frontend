import React, { PureComponent } from 'react';
import { arrayOf, func, shape, string } from 'prop-types';

import Select from './select';

class FunderSelect extends PureComponent {
  static propTypes = {
    funders: arrayOf(
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
    funders: [
      {
        id: '1',
        name: 'Funder One',
      },
      {
        id: '2',
        name: 'Funder Two',
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
    const { funders, value, onChange, onBlur, ...props } = this.props;

    return (
      <Select
        {...props}
        items={funders}
        name="funder"
        onBlur={onBlur}
        onChange={onChange}
        onCreate={this.handleOnCreate}
        value={value}
      />
    );
  }
}

export default FunderSelect;
