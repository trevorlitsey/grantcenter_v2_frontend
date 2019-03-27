import React, { PureComponent } from 'react';
import { number } from 'prop-types';

import Tag from 'react-bulma-components/lib/components/tag';
import { Control } from 'react-bulma-components/lib/components/form';

import { formatDollarAmount } from '../../helpers';

class ProjectProject extends PureComponent {
  static propTypes = {
    budget: number,
  };

  render() {
    const { budget } = this.props;

    if (!budget) {
      return null;
    }

    return (
      <Control>
        <Tag.Group gapless>
          <Tag color="success">Budget</Tag>
          <Tag color="light">{formatDollarAmount(budget)}</Tag>
        </Tag.Group>
      </Control>
    );
  }
}

export default ProjectProject;
