import React, { PureComponent } from 'react';
import AppLayout from '../shared/app-layout';
import ReportForm from './report-form';

const breadcrumbs = [
  {
    name: 'App',
    url: '/app',
  },
  {
    name: 'Reports',
    url: '/app/reports',
  },
  {
    name: '2019 Final Report',
    url: '/app/report/123',
  },
  {
    active: true,
    name: 'Edit',
    url: '/app/report/123/edit',
  },
];

class EditReport extends PureComponent {
  render() {
    return (
      <AppLayout
        breadcrumbs={breadcrumbs}
        subtitle="2019 Final Report"
        title="Edit Report"
      >
        <ReportForm />
      </AppLayout>
    );
  }
}

export default EditReport;
