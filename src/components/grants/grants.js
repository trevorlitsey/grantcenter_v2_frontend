import React, { PureComponent } from 'react';

import AppLayout from '../shared/app-layout';
import GrantsList from './grants-list';

class GrantsPage extends PureComponent {
  render() {
    return (
      <AppLayout title="Grants">
        <GrantsList />
      </AppLayout>
    );
  }
}

export default GrantsPage;
