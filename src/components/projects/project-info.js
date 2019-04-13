import React, { PureComponent } from 'react';
import { number, shape, string } from 'prop-types';

import { Field } from 'react-bulma-components/lib/components/form';

import SectionWithTitle from '../shared/section-with-title';
import ProjectBudget from './project-budget';
import ProjectLocation from './project-location';

class GrantInfo extends PureComponent {
  static propTypes = {
    budget: number,
    location: shape({
      address: string.isRequired,
    }),
  };

  render() {
    const { budget, location } = this.props;

    return (
      <SectionWithTitle>
        <Field kind="group" multiline>
          <ProjectBudget budget={budget} />
          <ProjectLocation location={location} />
        </Field>
      </SectionWithTitle>
    );
  }
}

export default GrantInfo;
