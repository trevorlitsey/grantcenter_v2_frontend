import React, { PureComponent } from 'react';

import AppLayout from '../shared/app-layout';

import GrantForm from './grant-form';

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
    name: 'Summer 2018',
    url: '/app/grant/123',
  },
  {
    active: true,
    name: 'Edit',
    url: '/app/grant/123/edit',
  },
];

class EditGrant extends PureComponent {
  render() {
    return (
      <AppLayout
        breadcrumbs={breadcrumbs}
        subtitle="Summer 2018"
        title="Edit Grant"
      >
        <GrantForm />
      </AppLayout>
    );
  }
}

export default EditGrant;
