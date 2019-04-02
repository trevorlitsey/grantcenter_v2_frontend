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
    name: 'Edit',
    url: '/app/funder/123/edit',
    active: true,
  },
];

class EditFunder extends PureComponent {
  render() {
    return (
      <AppLayout
        breadcrumbs={breadcrumbs}
        title="Edit Funder"
        subtitle="Ford Foundation"
      >
        <FunderForm />
      </AppLayout>
    );
  }
}

export default EditFunder;
