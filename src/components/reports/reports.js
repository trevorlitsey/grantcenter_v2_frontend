import React, { PureComponent } from 'react';

import AppLayout from '../shared/app-layout';
import ReportsList from './reports-list';

const breadcrumbs = [
  {
    name: 'App',
    url: '/app',
  },
  {
    name: 'Reports',
    url: '/app/reports',
    active: true,
  },
];

class ProjectsPage extends PureComponent {
  render() {
    return (
      <AppLayout title="Reports" breadcrumbs={breadcrumbs}>
        <ReportsList />
      </AppLayout>
    );
  }
}

export default ProjectsPage;
