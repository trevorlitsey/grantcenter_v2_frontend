import React, { PureComponent } from 'react';
import { arrayOf, shape, string } from 'prop-types';

import CardList from '../shared/card-list';
import MediaCard from '../shared/media-card';

import { formatDate } from '../../helpers';

import { reports } from '../../../seed';

const ReportCard = ({ id, dueDate, name, status }) => (
  <MediaCard
    subtitle={<ReportStatus status={status} />}
    title={name}
    to={`/app/report/${id}`}
  >
    <strong>Due Date:</strong> {formatDate(dueDate)}
    <br />
  </MediaCard>
);

class Reports extends PureComponent {
  static propTypes = {
    reports: arrayOf(
      shape({
        dueDate: string.isRequired,
        id: string.isRequired,
        name: string.isRequired,
        status: string.isRequired,
      })
    ),
  };

  static defaultProps = {
    reports,
  };

  render() {
    const { reports } = this.props;

    return (
      <CardList title="Reports">
        {reports.map(report => (
          <ReportCard key={report.id} {...report} />
        ))}
      </CardList>
    );
  }
}

export default Reports;
