import React, { PureComponent } from 'react';

import AppLayout from '../shared/app-layout';
import FundersList from './funders-list';

const breadcrumbs = [
  {
    name: 'App',
    url: '/app',
  },
  {
    name: 'Funders',
    url: '/funders',
    active: true,
  },
];

class FundersPage extends PureComponent {
  render() {
    return (
      <AppLayout breadcrumbs={breadcrumbs} title="Funders">
        <FundersList />
      </AppLayout>
    );
  }
}

export default FundersPage;
