import React, { PureComponent } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import AppLayout from '../shared/app-layout';
import Contacts from '../shared/contacts';
import CTAButton from '../shared/cta-button';
import Grants from '../shared/grants';
import Notes from '../shared/notes';
import Reports from '../shared/reports';
import Tags from '../shared/tags';

import Funders from './funders';
import ProjectInfo from './project-info';

import { formatDate } from '../../helpers';

import { project } from '../../../seed';

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
    name: 'Summer Education Workshops 2019',
    url: '/app/project/123',
  },
];

class SingleProjectPage extends PureComponent {
  static propType = {
    project: shape({
      budget: number,
      contacts: arrayOf(
        shape({
          email: string,
          id: string.isRequired,
          name: string.isRequired,
          phone: string,
        })
      ).isRequired,
      endDate: string,
      funders: arrayOf(
        shape({
          id: string.isRequired,
          name: string.isRequired,
        })
      ).isRequired,
      grants: arrayOf(
        shape({
          dueDate: string.isRequired,
          id: string.isRequired,
          name: string.isRequired,
          requestAmount: number.isRequired,
        })
      ).isRequired,
      id: string.isRequired,
      location: shape({
        address: string,
        coordinates: arrayOf(number),
      }),
      name: string.isRequired,
      notes: string,
      startDate: string,
      tags: arrayOf(string).isRequired,
    }),
  };

  static defaultProps = {
    project,
  };

  render() {
    const { project } = this.props;

    return (
      <AppLayout
        breadcrumbs={breadcrumbs}
        callToAction={<CTAButton.Edit to={'/app/project/123/edit'} />}
        subtitle={
          <span>
            {formatDate(project.startDate)} – {formatDate(project.endDate)}
          </span>
        }
        title={project.name}
      >
        <ProjectInfo budget={project.budget} location={project.location} />
        <Notes notes={project.notes} />
        <Tags tags={project.tags} />
        <Grants grants={project.grants} />
        <Reports reports={project.reports} />
        <Funders funders={project.funders} />
        <Contacts contacts={project.contacts} />
      </AppLayout>
    );
  }
}

export default SingleProjectPage;
