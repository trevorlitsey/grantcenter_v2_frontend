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
    active: true,
    name: 'Create',
    url: '/app/report/new',
  },
];

class CreateFunder extends PureComponent {
  render() {
    return (
      <AppLayout breadcrumbs={breadcrumbs} title="Create Report">
        <ReportForm />
      </AppLayout>
    );
  }
}

export default CreateFunder;
