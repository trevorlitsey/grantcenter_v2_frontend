import React, { PureComponent } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';

import List from '../shared/list';
import Item from '../shared/item';

import { formatDate } from '../../helpers';

class ProjectsList extends PureComponent {
  static propTypes = {
    projects: arrayOf(
      shape({
        id: string.isRequired,
        name: string.isRequired,
        startDate: string,
        endDate: string,
        budget: number,
      })
    ).isRequired,
  };

  static defaultProps = {
    projects: [
      {
        id: '123',
        name: 'Summer Education Workshops 2019',
        startDate: '2019-06-01',
        endDate: '2019-08-31',
        budget: 15000,
      },
    ],
  };

  render() {
    const { projects } = this.props;

    const formattedProjects = projects.map(project => ({
      ...project,
      startDate: formatDate(project.startDate),
      endDate: formatDate(project.endDate),
    }));

    return (
      <List items={formattedProjects}>
        <Item title="Name" source="name" to="/app/project/{id}" />
        <Item title="Start Date" source="startDate" />
        <Item title="End Date" source="endDate" />
      </List>
    );
  }
}

export default ProjectsList;
