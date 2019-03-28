import React, { PureComponent } from 'react';
import { oneOf } from 'prop-types';

import { Control } from 'react-bulma-components/lib/components/form';
import Tag from 'react-bulma-components/lib/components/tag';

import { ReportStatuses } from '../../constants';

class ReportStatus extends PureComponent {
  static propTypes = {
    status: oneOf(Object.values(ReportStatuses)),
  };

  render() {
    const { status } = this.props;

    let color;

    switch (status) {
      case ReportStatuses.NOT_STARTED:
        color = 'light';
        break;
      case ReportStatuses.DRAFT:
        color = 'info';
        break;
      case ReportStatuses.SUBMITTED:
        color = 'success';
        break;
      case ReportStatuses.CLOSED:
        color = 'black';
        break;
    }

    return (
      <Control>
        <Tag.Group gapless>
          <Tag color="dark">Status</Tag>
          <Tag color={color}>{status}</Tag>
        </Tag.Group>
      </Control>
    );
  }
}

export default ReportStatus;
