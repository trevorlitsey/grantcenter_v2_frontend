import React, { PureComponent } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import List from '../shared/list';
import Item from '../shared/item';

import { formatDate } from '../../helpers';

import { projects } from '../../../seed';

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
    projects,
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
        <Item source="name" title="Name" to="/app/project/{id}" />
        <Item source="startDate" title="Start Date" />
        <Item source="endDate" title="End Date" />
      </List>
    );
  }
}

export default ProjectsList;
