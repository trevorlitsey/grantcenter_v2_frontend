import React, { PureComponent } from 'react';
import AppLayout from '../shared/app-layout';
import CTAButton from '../shared/cta-button';
import GrantsList from './grants-list';

const breadcrumbs = [
  {
    name: 'App',
    url: '/app',
  },
  {
    active: true,
    name: 'Grants',
    url: '/app/grants',
  },
];

class GrantsPage extends PureComponent {
  render() {
    return (
      <AppLayout
        breadcrumbs={breadcrumbs}
        callToAction={<CTAButton.Create to="/app/grant/create" />}
        title="Grants"
      >
        <GrantsList />
      </AppLayout>
    );
  }
}

export default GrantsPage;
