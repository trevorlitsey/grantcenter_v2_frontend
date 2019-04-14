import React, { PureComponent } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Creatable } from 'react-select';

import { convertItemForSelect } from './select';

import { logger } from '../../../../helpers';
import { ReactSelect } from '../../../../constants';

// TODO: add new tags to tags array optomistic rendering, etc.

class TagsSelect extends PureComponent {
  static propTypes = {
    name: string.isRequired,
    tags: arrayOf(
      shape({
        id: string.isRequired,
        name: string.isRequired,
      })
    ).isRequired,
    value: arrayOf(string),
  };

  static defaultProps = {
    tags: [],
    value: [],
  };

  state = {
    isLoading: false,
  };

  onChange = (options, { action }) => {
    if (action === ReactSelect.ON_CREATE) {
      this.onCreate(options.slice(-1));
    }

    this.onSelect(options.map(option => option.value));
  };

  onCreate = async ([option]) => {
    // TODO
    this.setState({ isLoading: true });
    try {
      await new Promise(res =>
        setTimeout(
          () =>
            res({
              createTag: {
                id: '650982765',
                name: option.value,
              },
            }),
          1000
        )
      );
    } catch (e) {
      logger.error(e);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSelect = values => {
    const { name } = this.props;

    this.props.onChange({
      target: {
        name,
        value: values,
      },
    });
  };

  render() {
    const { name, tags, ...props } = this.props;
    const { isLoading } = this.state;

    const options = tags.map(convertItemForSelect);

    const value = options.filter(option => props.value.includes(option.value));

    return (
      <Creatable
        {...props}
        closeMenuOnSelect={options.length - value.length > 1 ? false : true}
        hideSelectedOptions
        isLoading={isLoading}
        isMulti
        name={name}
        onChange={this.onChange}
        onCreate={this.onCreate}
        options={options}
        value={value.length ? value : undefined}
      />
    );
  }
}

export default TagsSelect;
