import React, { PureComponent } from 'react';
import { number, shape, string } from 'prop-types';
import { Link } from 'gatsby';

import AppLayout from '../shared/app-layout';
import CTAButton from '../shared/cta-button';
import Notes from '../shared/notes';
import Reports from '../shared/reports';
import Tags from '../shared/tags';

import GrantHeader from './grant-header';
import GrantInfo from './grant-info';

const breadcrumbs = [
  {
    name: 'App',
    url: '/app',
  },
  {
    name: 'Grants',
    url: '/app/grants',
  },
  {
    active: true,
    name: 'Ford Foundation – Summer 2018',
    url: '/app/grant',
  },
];

class SingleGrantPage extends PureComponent {
  static propType = {
    grant: shape({
      foundation: shape({
        name: string.isRequired,
      }).isRequired,
      name: string.isRequired,
      requestAmount: number.isRequired,
    }),
  };

  static defaultProps = {
    grant: {
      archived: false,
      awardAmount: 500,
      confidence: 80,
      dueDate: '2018-10-09',
      funder: {
        id: '123',
        name: 'Ford Foundation',
      },
      id: '123',
      isRolling: false,
      name: 'Summer 2018',
      name: 'This is a grant',
      notes: 'these are some notes',
      project: {
        id: '123',
        name: '2018 Education Initiative',
      },
      requestAmount: 10000,
      requestAmount: 1000,
      status: 'SUBMITTED',
      tags: ['genOp', 'summer 2018'],
    },
  };

  render() {
    const { grant } = this.props;

    return (
      <AppLayout
        breadcrumbs={breadcrumbs}
        callToAction={<CTAButton.Edit to={'/app/grant/123/edit'} />}
        subtitle={
          <Link to={`/app/funder/${grant.funder.id}`}>{grant.funder.name}</Link>
        }
        title={grant.name}
      >
        <GrantInfo
          isRolling={grant.isRolling}
          project={grant.project}
          status={grant.status}
        />
        <GrantHeader
          awardAmount={grant.awardAmount}
          confidence={grant.confidence}
          dueDate={grant.dueDate}
          requestAmount={grant.requestAmount}
        />
        <Notes notes={grant.notes} />
        <Tags tags={grant.tags} />
        <Reports reports={grant.reports} />
      </AppLayout>
    );
  }
}

export default SingleGrantPage;
