import React, { PureComponent } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { Creatable } from 'react-select';

import { logger } from '../../../../helpers';
import { ReactSelect } from '../../../../constants';

import FunderSelect from './funder';
import GrantSelect from './grant';
import TagsSelect from './tags';

import './select.css';

class Select extends PureComponent {
  static propTypes = {
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
    value: shape({
      id: string,
      name: string,
    }),
  };

  static defaultProps = {
    items: [],
    onCreateText: label => `Create funder: ${label}`,
  };

  state = {
    isLoading: this.props.isLoading || false,
  };

  onChange = async (option, { action }) => {
    const value = option ? convertItemFromSelect(option) : undefined;

    if (action === ReactSelect.ON_CREATE) {
      return this.onCreate(value);
    }

    this.onSelect(value);
  };

  onCreate = async value => {
    const { onCreate } = this.props;

    this.setState({ isLoading: true });

    try {
      // TODO: get value from this
      await onCreate(value.name);
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

    const convertedValues = items.find(item => item.id === props.value);
    const convertedOptions = convertItemsToSelect(items);

    return (
      <Creatable
        {...props}
        backspaceRemoves
        isClearable
        isLoading={isLoading}
        name={name}
        onChange={this.onChange}
        options={convertedOptions}
        promptTextCreator={onCreateText}
        value={convertedValues}
      />
    );
  }
}

const convertItemToSelect = item => ({
  label: item.name,
  value: item.id,
});

const convertItemFromSelect = option => ({
  id: option.value,
  name: option.label,
});

export const convertItemsToSelect = items => items.map(convertItemToSelect);

export const convertItemsFromSelect = options =>
  options.map(convertItemFromSelect);

Select.Funder = FunderSelect;
Select.Grant = GrantSelect;
Select.Tags = TagsSelect;

export default Select;
