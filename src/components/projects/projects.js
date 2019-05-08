import React, { PureComponent } from 'react';

import AppLayout from '../shared/app-layout';
import CTAButton from '../shared/cta-button';

import ProjectsList from './projects-list';

const breadcrumbs = [
  {
    name: 'App',
    url: '/app',
  },
  {
    active: true,
    name: 'Projects',
    url: '/app/projects',
  },
];

class ProjectsPage extends PureComponent {
  render() {
    return (
      <AppLayout
        breadcrumbs={breadcrumbs}
        callToAction={<CTAButton.Create to="/app/project/create" />}
        title="Projects"
      >
        <ProjectsList />
      </AppLayout>
    );
  }
}

export default ProjectsPage;
