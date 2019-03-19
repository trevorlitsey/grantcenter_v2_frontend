import React, { PureComponent } from 'react';
import { number, shape, string } from 'prop-types';

import AppLayout from '../shared/app-layout';
import GrantHeader from './grant-header';
import GrantContacts from './grant-contacts';

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
        name: 'Ford Foundation',
      },
      project: {
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
        title={`${grant.funder.name} – ${grant.name}`}
        breadcrumbs={breadcrumbs}
      >
        <GrantHeader />
        <GrantContacts />
        <p>{grant.name}</p>
        <p>{grant.funder.name}</p>
        <p>${grant.requestAmount.toLocaleString()}</p>
      </AppLayout>
    );
  }
}

export default SingleGrantPage;
