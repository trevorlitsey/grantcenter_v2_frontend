import React, { PureComponent } from 'react';

import AppLayout from '../shared/app-layout';

import ProjectForm from './project-form';

const breadcrumbs = [
  {
    name: 'App',
    url: '/app',
  },
  {
    name: 'Projects',
    url: '/app/projects',
  },
  {
    name: 'Summer Education Workshops 2018',
    url: '/app/project/123',
  },
  {
    name: 'Edit',
    url: '/app/project/123/edit',
    active: true,
  },
];

class EditProject extends PureComponent {
  render() {
    return (
      <AppLayout
        breadcrumbs={breadcrumbs}
        subtitle="Summer Education Workshops 2018"
        title="Edit Project"
      >
        <ProjectForm />
      </AppLayout>
    );
  }
}

export default EditProject;
