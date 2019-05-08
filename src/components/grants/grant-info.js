import React, { PureComponent } from 'react';
import { bool, shape, string } from 'prop-types';

import { Field } from 'react-bulma-components/lib/components/form';

import SectionWithTitle from '../shared/section-with-title';
import GrantStatus from './grant-status';
import GrantIsRolling from './grant-is-rolling';
import ProjectTag from '../shared/project-tag';

class GrantInfo extends PureComponent {
  static propTypes = {
    isRolling: bool,
    project: shape({
      id: string.isRequired,
      name: string.isRequired,
    }),
    status: string.isRequired,
  };

  render() {
    const { isRolling, status, project } = this.props;

    return (
      <SectionWithTitle>
        <Field kind="group" multiline>
          <GrantStatus status={status} />
          <GrantIsRolling isRolling={isRolling} />
          <ProjectTag project={project} />
        </Field>
      </SectionWithTitle>
    );
  }
}

export default GrantInfo;
