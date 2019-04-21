import React, { Fragment, PureComponent } from 'react';
import { arrayOf, number, oneOf, shape, string } from 'prop-types';
import { Link } from 'gatsby';
import AppLayout from '../shared/app-layout';
import CTAButton from '../shared/cta-button';
import Notes from '../shared/notes';
import Tags from '../shared/tags';
import ReportHeader from './report-header';
import ReportInfo from './report-info';
import { ReportStatuses } from '../../constants';
import { report } from '../../../seed';

const breadcrumbs = [
  {
    name: 'App',
    url: '/app',
  },
  {
    name: 'Reports',
    url: '/app/reports',
  },
  {
    active: true,
    name: 'Final Report',
    url: '/app/report/123',
  },
];

class SingleReportPage extends PureComponent {
  static propType = {
    report: shape({
      dueDate: string.isRequired,
      grant: shape({
        awardAmount: number,
        funder: shape({
          id: string.isRequired,
          name: string.isRequired,
        }).isRequired,
        id: string.isRequired,
        name: string.isRequired,
        project: shape({
          id: string.isRequired,
          name: string.isRequired,
        }),
        requestAmount: number.isRequired,
      }).isRequired,
      id: string.isRequired,
      name: string.isRequired,
      notes: string,
      status: oneOf(Object.values(ReportStatuses)),
      tags: arrayOf(string).isRequired,
    }),
  };

  static defaultProps = {
    report,
  };

  render() {
    const { report } = this.props;

    return (
      <AppLayout
        breadcrumbs={breadcrumbs}
        callToAction={<CTAButton.Edit to={'/app/report/123/edit'} />}
        subtitle={
          <Fragment>
            <Link to={`/app/grant/${report.grant.id}`}>
              {report.grant.name}
            </Link>{' '}
            /{' '}
            <Link to={`/app/funder/${report.grant.funder.id}`}>
              {report.grant.funder.name}
            </Link>
          </Fragment>
        }
        title={report.name}
      >
        <ReportInfo project={report.grant.project} status={report.status} />
        <ReportHeader
          awardAmount={report.grant.awardAmount}
          dueDate={report.dueDate}
          requestAmount={report.grant.requestAmount}
        />
        <Notes notes={report.notes} />
        <Tags tags={report.tags} />
      </AppLayout>
    );
  }
}

export default SingleReportPage;
