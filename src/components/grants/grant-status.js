import React, { PureComponent } from 'react';
import { string } from 'prop-types';

import { Control } from 'react-bulma-components/lib/components/form';
import Tag from 'react-bulma-components/lib/components/tag';

const Status = {
  ACTIVE: 'ACTIVE',
  AWARDED: 'AWARDED',
  CLOSED: 'CLOSED',
  DRAFT: 'DRAFT',
  PROSPECTIVE: 'PROSPECTIVE',
  REJECTED: 'REJECTED',
  SUBMITTED: 'SUBMITTED',
};

class GrantStatus extends PureComponent {
  static propTypes = {
    status: string.isRequired,
  };

  render() {
    const { status } = this.props;

    let color;

    switch (status) {
      case Status.ACTIVE:
        color = 'primary';
        break;
      case Status.AWARDED:
        color = 'success';
        break;
      case Status.CLOSED:
        color = 'black';
        break;
      case Status.DRAFT:
        color = 'info';
        break;
      case Status.PROSPECTIVE:
        color = 'light';
        break;
      case Status.REJECTED:
        color = 'danger';
        break;
      case Status.SUBMITTED:
        color = 'warning';
        break;
      default:
        color = 'light';
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

export default GrantStatus;
