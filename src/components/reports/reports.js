import React, { PureComponent } from 'react';
import AppLayout from '../shared/app-layout';
import CTAButton from '../shared/cta-button';
import ReportsList from './reports-list';

const breadcrumbs = [
  {
    name: 'App',
    url: '/app',
  },
  {
    active: true,
    name: 'Reports',
    url: '/app/reports',
  },
];

class ProjectsPage extends PureComponent {
  render() {
    return (
      <AppLayout
        breadcrumbs={breadcrumbs}
        callToAction={<CTAButton.Create to="/app/report/create" />}
        title="Reports"
      >
        <ReportsList />
      </AppLayout>
    );
  }
}

export default ProjectsPage;
