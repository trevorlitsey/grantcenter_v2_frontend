import React, { PureComponent } from 'react';

import AppLayout from '../shared/app-layout';

import FunderForm from './funder-form';

const breadcrumbs = [
  {
    name: 'App',
    url: '/app',
  },
  {
    name: 'Funders',
    url: '/app/funders',
  },
  {
    active: true,
    name: 'Create',
    url: '/app/funder/new',
  },
];

class CreateFunder extends PureComponent {
  render() {
    return (
      <AppLayout breadcrumbs={breadcrumbs} title="Create Funder">
        <FunderForm />
      </AppLayout>
    );
  }
}

export default CreateFunder;
