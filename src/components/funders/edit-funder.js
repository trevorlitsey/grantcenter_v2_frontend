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
    name: 'Ford Foundation',
    url: '/app/funder/123',
  },
  {
    active: true,
    name: 'Edit',
    url: '/app/funder/123/edit',
  },
];

class EditFunder extends PureComponent {
  render() {
    return (
      <AppLayout
        breadcrumbs={breadcrumbs}
        subtitle="Ford Foundation"
        title="Edit Funder"
      >
        <FunderForm />
      </AppLayout>
    );
  }
}

export default EditFunder;
