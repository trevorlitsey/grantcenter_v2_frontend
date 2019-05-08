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
    active: true,
    name: 'Create',
    url: '/app/grant/new',
  },
];

class CreateGrant extends PureComponent {
  render() {
    return (
      <AppLayout breadcrumbs={breadcrumbs} title="Create Funder">
        <GrantForm />
      </AppLayout>
    );
  }
}

export default CreateGrant;
