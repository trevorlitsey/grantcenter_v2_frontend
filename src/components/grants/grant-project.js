import React, { PureComponent } from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'gatsby';

import Tag from 'react-bulma-components/lib/components/tag';
import { Control } from 'react-bulma-components/lib/components/form';

class GrantProject extends PureComponent {
  static propTypes = {
    project: shape({
      id: string.isRequired,
      name: string.isRequired,
    }),
  };

  render() {
    const { project } = this.props;

    if (!project || !project.name) {
      return null;
    }

    return (
      <Control>
        <Tag.Group gapless>
          <Tag color="dark">Project</Tag>
          <Link to={`/project/${project.id}`}>
            <Tag color="light">{project.name}</Tag>
          </Link>
        </Tag.Group>
      </Control>
    );
  }
}

export default GrantProject;
