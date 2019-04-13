import React, { PureComponent } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { Creatable } from 'react-select';

import { logger } from '../../../helpers';

const ON_SELECT = 'select-option';
const ON_CREATE = 'create-option';

class Select extends PureComponent {
  static defaultProps = {
    id: string.isRequired,
    isLoading: bool,
    items: arrayOf(
      shape({
        id: string.isRequired,
        name: string.isRequired,
      })
    ),
    onChange: func.isRequired,
    onCreateText: func.isRequired,
    selectedItemId: string.isRequired,
  };

  static defaultProps = {
    onCreateText: label => `Create funder: ${label}`,
  };

  state = {
    isLoading: this.props.isLoading || false,
  };

  onChange = async (option, { action }) => {
    const { id } = this.props;
    const valueAsEvent = {
      id,
      value: option.value,
    };

    if (action === ON_CREATE) {
      await this.onCreate(valueAsEvent);
    } else if (action === ON_SELECT) {
      this.onSelect(valueAsEvent);
    }
  };

  onCreate = async event => {
    const { onCreate } = this.props;

    this.setState({ isLoading: true });

    try {
      await onCreate(event);
      this.onSelect(event);
    } catch (e) {
      // TODO
      logger.error(e);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSelect = event => {
    this.props.onChange(event);
  };

  render() {
    const { id, items, onCreateText, ...props } = this.props;
    const { isLoading } = this.state;

    const value = items.find(item => item.id === this.props.value);
    const options = items.map(convertItemForSelect);

    return (
      <Creatable
        {...props}
        backspaceRemoves
        id={id}
        isLoading={isLoading}
        onChange={this.onChange}
        options={options}
        promptTextCreator={onCreateText}
        value={value}
      />
    );
  }
}

const convertItemForSelect = item => ({
  label: item.name,
  value: item.id,
});

export default Select;
