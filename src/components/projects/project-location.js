import React, { PureComponent } from 'react';
import { shape, string } from 'prop-types';

import Tag from 'react-bulma-components/lib/components/tag';
import { Control } from 'react-bulma-components/lib/components/form';

import GoogleMapsLink from '../shared/google-maps-link';

class ProjectProject extends PureComponent {
  static propTypes = {
    location: shape({
      address: string.isRequired,
    }),
  };

  render() {
    const { location } = this.props;

    if (!location || !location.address) {
      return null;
    }

    return (
      <Control>
        <GoogleMapsLink location={location}>
          <Tag.Group gapless>
            <Tag color="dark">Location</Tag>
            <Tag color="light">{location.address}</Tag>
          </Tag.Group>
        </GoogleMapsLink>
      </Control>
    );
  }
}

export default ProjectProject;
