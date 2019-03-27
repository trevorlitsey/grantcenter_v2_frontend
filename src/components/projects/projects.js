import React, { PureComponent } from 'react';

import AppLayout from '../shared/app-layout';
import ProjectsList from './projects-list';

const breadcrumbs = [
  {
    name: 'App',
    url: '/app',
  },
  {
    name: 'Projects',
    url: '/app/projects',
    active: true,
  },
];

class ProjectsPage extends PureComponent {
  render() {
    return (
      <AppLayout title="Projects" breadcrumbs={breadcrumbs}>
        <ProjectsList />
      </AppLayout>
    );
  }
}

export default ProjectsPage;
