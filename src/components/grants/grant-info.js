import React, { PureComponent } from 'react';
import { bool, shape, string } from 'prop-types';

import { Field } from 'react-bulma-components/lib/components/form';

import SectionWithTitle from '../shared/section-with-title';
import GrantStatus from './grant-status';
import GrantIsRolling from './grant-is-rolling';
import GrantProject from './grant-project';

class GrantInfo extends PureComponent {
  static propTypes = {
    isRolling: bool,
    status: string.isRequired,
    project: shape({
      id: string.isRequired,
      name: string.isRequired,
    }),
  };

  render() {
    const { isRolling, status, project } = this.props;

    return (
      <SectionWithTitle>
        <Field multiline kind="group">
          <GrantStatus status={status} />
          <GrantIsRolling isRolling={isRolling} />
          <GrantProject project={project} />
        </Field>
      </SectionWithTitle>
    );
  }
}

export default GrantInfo;
