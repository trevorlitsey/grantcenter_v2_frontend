import React, { PureComponent } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import AppLayout from '../shared/app-layout';
import Contacts from '../shared/contacts';
import Grants from '../shared/grants';
import Notes from '../shared/notes';
import Tags from '../shared/tags';

import Funders from './funders';
import ProjectInfo from './project-info';

import { formatDate } from '../../helpers';

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

class SingleContactPage extends PureComponent {
  static propType = {
    contact: shape({
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
    project: {
      id: '123',
      name: 'Summer Education Workshops 2019',
      startDate: '2019-06-01',
      endDate: '2019-08-31',
      notes: 'These are some project notes',
      budget: 15000,
      location: {
        address: '456 14th St, Minneapolis, MN 55407',
      },
      tags: ['tag1', 'tag2'],
      funders: [
        {
          id: '456',
          name: 'Ford Foundation',
        },
      ],
      grants: [
        {
          id: '456',
          name: 'Summer 2018',
          funder: {
            id: '456',
            name: 'Ford Foundation',
          },
          dueDate: '2019-05-11',
          requestAmount: 5000,
        },
      ],
      contacts: [
        {
          id: '123',
          name: 'Larry Bird',
        },
      ],
    },
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
        <Contacts contacts={project.contacts} />
        <Funders funders={project.funders} />
      </AppLayout>
    );
  }
}

export default SingleContactPage;
