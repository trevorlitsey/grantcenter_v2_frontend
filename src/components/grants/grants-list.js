import React, { PureComponent } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';

import List from '../shared/list';

const KEYS = [
  {
    title: 'Name',
    key: 'name',
    to: '/app/grant/',
    id: 'id',
  },
  {
    title: 'Funder',
    key: 'funder.name',
    to: '/app/funder/',
    id: 'funder.id',
  },
  {
    title: 'Request Amount',
    key: 'requestAmount',
  },
];

class GrantsList extends PureComponent {
  static propTypes = {
    grants: arrayOf(
      shape({
        name: string.isRequired,
        funder: shape({
          id: string.isRequired,
          name: string.isRequired,
        }).isRequired,
        amount: number.isRequired,
      })
    ).isRequired,
  };

  static defaultProps = {
    grants: [
      {
        id: '123',
        name: 'Summer 2018',
        funder: {
          id: '123',
          name: 'Ford Foundation',
        },
        requestAmount: 10000,
      },
    ],
  };

  render() {
    const { grants } = this.props;

    const formattedGrants = grants.map(grant => ({
      ...grant,
      requestAmount: '$' + grant.requestAmount.toLocaleString(),
    }));

    return <List items={formattedGrants} keys={KEYS} />;
  }
}

export default GrantsList;
