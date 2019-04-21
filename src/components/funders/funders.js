import React, { PureComponent } from 'react';

import AppLayout from '../shared/app-layout';
import CTAButton from '../shared/cta-button';

import FundersList from './funders-list';

const breadcrumbs = [
  {
    name: 'App',
    url: '/app',
  },
  {
    active: true,
    name: 'Funders',
    url: '/app/funders',
  },
];

class FundersPage extends PureComponent {
  render() {
    return (
      <AppLayout
        breadcrumbs={breadcrumbs}
        callToAction={<CTAButton.Create to="/app/funder/create" />}
        title="Funders"
      >
        <FundersList />
      </AppLayout>
    );
  }
}

export default FundersPage;
