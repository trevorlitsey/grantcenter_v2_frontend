import React, { PureComponent } from 'react';
import { oneOf, shape, string } from 'prop-types';
import { Field } from 'react-bulma-components/lib/components/form';
import ProjectTag from '../shared/project-tag';
import SectionWithTitle from '../shared/section-with-title';
import ReportStatus from '../shared/report-status';
import { ReportStatuses } from '../../constants';

class ReportInfo extends PureComponent {
  static propTypes = {
    project: shape({
      id: string.isRequired,
      name: string.isRequired,
    }),
    status: oneOf(Object.values(ReportStatuses)),
  };

  render() {
    const { project, status } = this.props;

    return (
      <SectionWithTitle>
        <Field kind="group" multiline>
          <ReportStatus status={status} />
          <ProjectTag project={project} />
        </Field>
      </SectionWithTitle>
    );
  }
}

export default ReportInfo;
