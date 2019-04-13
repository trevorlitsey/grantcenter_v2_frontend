import React, { PureComponent } from 'react';

import AppLayout from '../shared/app-layout';
import GrantsList from './grants-list';

const breadcrumbs = [
  {
    name: 'App',
    url: '/app',
  },
  {
    name: 'Grants',
    url: '/app/grants',
    active: true,
  },
];

class GrantsPage extends PureComponent {
  render() {
    return (
      <AppLayout breadcrumbs={breadcrumbs} title="Grants">
        <GrantsList />
      </AppLayout>
    );
  }
}

export default GrantsPage;
