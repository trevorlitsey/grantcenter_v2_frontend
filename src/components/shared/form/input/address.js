import React, { PureComponent } from 'react';
import { func, string } from 'prop-types';
import Autocomplete from 'react-google-autocomplete';

class AddressAutoComplete extends PureComponent {
  static propTypes = {
    id: string.isRequired,
    onChange: func.isRequired,
  };

  handleOnBlur = e => {
    this.props.onBlur(e);
  };

  handleSelect = googleRes => {
    const { id } = this.props;

    this.props.onChange({
      target: {
        id,
        value: googleRes.formatted_address || '',
      },
    });
  };

  render() {
    const { value, onBlur, onChange, ...props } = this.props;

    return (
      <Autocomplete
        className="input"
        defaultValue={value}
        onBlur={onBlur}
        onChange={onChange}
        onPlaceSelected={this.handleSelect}
        types={['address']}
        {...props}
      />
    );
  }
}

export default AddressAutoComplete;
