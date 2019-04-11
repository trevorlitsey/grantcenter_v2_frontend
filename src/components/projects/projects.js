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
    name: 'Projects',
    url: '/app/projects',
    active: true,
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
