import React, { PureComponent } from 'react';
import { arrayOf, shape, string } from 'prop-types';

import List from '../shared/list';
import Item from '../shared/item';

import { formatDate } from '../../helpers';

class ReportsList extends PureComponent {
  static propTypes = {
    reports: arrayOf(
      shape({
        id: string.isRequired,
        name: string.isRequired,
        grant: shape({
          id: string.isRequired,
          name: string.isRequired,
        }).isRequired,
        dueDate: string,
      })
    ).isRequired,
  };

  static defaultProps = {
    reports: [
      {
        id: '123',
        name: 'Final Report',
        dueDate: '2019-10-01',
        grant: {
          id: '123',
          name: 'Ford Foundation',
        },
      },
    ],
  };

  render() {
    const { reports } = this.props;

    const formattedReports = reports.map(report => ({
      ...report,
      dueDate: formatDate(report.dueDate),
    }));

    return (
      <List items={formattedReports}>
        <Item title="Name" source="name" to="/app/report/{id}" />
        <Item title="Grant" source="grant.name" to="/app/grant/{grant.name}" />
        <Item title="Due Date" source="dueDate" />
      </List>
    );
  }
}

export default ReportsList;
