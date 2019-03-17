import React, { PureComponent } from 'react';
import { number, shape, string } from 'prop-types';

import AppLayout from '../shared/app-layout';

const breadcrumbs = [
  {
    name: 'App',
    url: '/app',
  },
  {
    name: 'Grants',
    url: '/app/grants',
  },
  {
    name: 'Ford Foundation – Summer 2018',
    url: '/app/grant',
    active: true,
  },
];

class SingleGrantPage extends PureComponent {
  static propType = {
    grant: shape({
      name: string.isRequired,
      foundation: shape({
        name: string.isRequired,
      }).isRequired,
      requestAmount: number.isRequired,
    }),
  };

  static defaultProps = {
    grant: {
      name: 'Summer 2018',
      foundation: {
        name: 'Ford Foundation',
      },
      requestAmount: 10000,
    },
  };

  render() {
    const { grant } = this.props;

    return (
      <AppLayout
        title={`${grant.foundation.name} – ${grant.name}`}
        breadcrumbs={breadcrumbs}
      >
        <p>{grant.name}</p>
        <p>{grant.foundation.name}</p>
        <p>${grant.requestAmount.toLocaleString()}</p>
      </AppLayout>
    );
  }
}

export default SingleGrantPage;
