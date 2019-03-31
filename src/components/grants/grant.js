import React, { PureComponent } from 'react';
import { number, shape, string } from 'prop-types';
import { Link } from 'gatsby';

import AppLayout from '../shared/app-layout';
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
    name: 'Ford Foundation – Summer 2018',
    url: '/app/grant',
    active: true,
  },
];

class SingleGrantPage extends PureComponent {
  static propType = {
    grant: shape({
      name: string.isRequired,
      foundation: shape({
        name: string.isRequired,
      }).isRequired,
      requestAmount: number.isRequired,
    }),
  };

  static defaultProps = {
    grant: {
      name: 'Summer 2018',
      funder: {
        id: '123',
        name: 'Ford Foundation',
      },
      project: {
        id: '123',
        name: '2018 Education Initiative',
      },
      requestAmount: 10000,
      id: '123',
      name: 'This is a grant',
      requestAmount: 1000,
      awardAmount: 500,
      confidence: 80,
      dueDate: '2018-10-09',
      isRolling: false,
      status: 'SUBMITTED',
      tags: ['genOp', 'summer 2018'],
      notes: 'these are some notes',
      archived: false,
    },
  };

  render() {
    const { grant } = this.props;

    return (
      <AppLayout
        breadcrumbs={breadcrumbs}
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
