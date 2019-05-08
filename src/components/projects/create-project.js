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
    active: true,
    name: 'Create',
    url: '/app/project/create',
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
