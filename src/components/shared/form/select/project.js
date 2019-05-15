import React, { PureComponent } from 'react';
import { arrayOf, func, shape, string } from 'prop-types';

import Select from './select';

class ProjectSelect extends PureComponent {
  static propTypes = {
    onBlur: func.isRequired,
    onChange: func.isRequired,
    projects: arrayOf(
      shape({
        id: string.isRequired,
        name: string.isRequired,
      })
    ),
    value: shape({
      id: string,
      name: string,
    }),
  };

  static defaultProps = {
    projects: [
      {
        id: '1',
        name: 'Project One',
      },
      {
        id: '2',
        name: 'Project Two',
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
    const { projects, value, onChange, onBlur, ...props } = this.props;

    return (
      <Select
        {...props}
        items={projects}
        name="project"
        onBlur={onBlur}
        onChange={onChange}
        onCreate={this.handleOnCreate}
        value={value}
      />
    );
  }
}

export default ProjectSelect;
