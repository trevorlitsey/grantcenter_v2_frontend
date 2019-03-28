import React, { PureComponent } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import AppLayout from '../shared/app-layout';
import Contacts from '../shared/contacts';
import Reports from '../shared/reports';
import Grants from '../shared/grants';
import Notes from '../shared/notes';
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
    name: 'Summer Education Workshops 2019',
    url: '/app/project/123',
    active: true,
  },
];

class SingleProjectPage extends PureComponent {
  static propType = {
    project: shape({
      id: string.isRequired,
      name: string.isRequired,
      startDate: string,
      endDate: string,
      budget: number,
      notes: string,
      location: shape({
        address: string,
        coordinates: arrayOf(number),
      }),
      tags: arrayOf(string).isRequired,
      contacts: arrayOf(
        shape({
          id: string.isRequired,
          name: string.isRequired,
          phone: string,
          email: string,
        })
      ).isRequired,
      grants: arrayOf(
        shape({
          id: string.isRequired,
          name: string.isRequired,
          dueDate: string.isRequired,
          requestAmount: number.isRequired,
        })
      ).isRequired,
      funders: arrayOf(
        shape({
          id: string.isRequired,
          name: string.isRequired,
        })
      ).isRequired,
    }),
  };

  static defaultProps = {
    project,
  };

  render() {
    const { project } = this.props;

    return (
      <AppLayout
        title={project.name}
        subtitle={
          <span>
            {formatDate(project.startDate)} – {formatDate(project.endDate)}
          </span>
        }
        breadcrumbs={breadcrumbs}
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
