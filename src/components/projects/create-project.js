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
    name: 'Create',
    url: '/app/project/create',
    active: true,
  },
];

class CreateProject extends PureComponent {
  render() {
    return (
      <AppLayout breadcrumbs={breadcrumbs} title="Create Project">
        <ProjectForm />
      </AppLayout>
    );
  }
}

export default CreateProject;
