import React, { PureComponent } from 'react';
import { node, shape, string } from 'prop-types';

class GoogleMapsLink extends PureComponent {
  static propTypes = {
    children: node.isRequired,
    location: shape({
      address: string.isRequired,
    }),
  };

  render() {
    const { location, children } = this.props;

    if (!location || !location.address) {
      return null;
    }

    return (
      <a
        href={`https://maps.google.com/?q=${location.address}`}
        target="_blank"
      >
        {children}
      </a>
    );
  }
}

export default GoogleMapsLink;
