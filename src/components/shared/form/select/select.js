import React, { PureComponent } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { Creatable } from 'react-select';

import { logger } from '../../../../helpers';
import { ReactSelect } from '../../../../constants';

import TagsSelect from './tags';

class Select extends PureComponent {
  static defaultProps = {
    isLoading: bool,
    items: arrayOf(
      shape({
        id: string.isRequired,
        name: string.isRequired,
      })
    ),
    name: string.isRequired,
    onChange: func.isRequired,
    onCreateText: func.isRequired,
    selectedItemId: string.isRequired,
  };

  static defaultProps = {
    items: [],
    onCreateText: label => `Create funder: ${label}`,
  };

  state = {
    isLoading: this.props.isLoading || false,
  };

  onChange = async (option, { action }) => {
    console.log(option);

    const { value } = option;

    if (action === ReactSelect.ON_CREATE) {
      return this.onCreate(value);
    }

    this.onSelect(value);
  };

  onCreate = async value => {
    const { onCreate } = this.props;

    this.setState({ isLoading: true });

    try {
      await onCreate(value);
      this.onSelect(value);
    } catch (e) {
      // TODO
      logger.error(e);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSelect = value => {
    const { name } = this.props;
    this.props.onChange({ target: { name, value } });
  };

  render() {
    const { items, name, onCreateText, ...props } = this.props;
    const { isLoading } = this.state;

    const value = items.find(item => item.id === props.value);
    const options = items.map(convertItemForSelect);

    const defaultValue = options.find(
      option => option.value === props.defaultValue
    );

    return (
      <Creatable
        {...props}
        backspaceRemoves
        defaultValue={defaultValue}
        isLoading={isLoading}
        name={name}
        onChange={this.onChange}
        options={options}
        promptTextCreator={onCreateText}
        value={value}
      />
    );
  }
}

export const convertItemForSelect = item => ({
  label: item.name,
  value: item.id,
});

Select.Tags = TagsSelect;

export default Select;
