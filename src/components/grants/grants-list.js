import React, { PureComponent } from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import List from '../shared/list';
import Item from '../shared/item';

class GrantsList extends PureComponent {
  static propTypes = {
    grants: arrayOf(
      shape({
        funder: shape({
          id: string.isRequired,
          name: string.isRequired,
        }).isRequired,
        name: string.isRequired,
        requestAmount: number.isRequired,
      })
    ).isRequired,
  };

  static defaultProps = {
    grants: [
      {
        funder: {
          id: '456',
          name: 'Ford Foundation',
        },
        id: '123',
        name: 'Summer 2018',
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

    return (
      <List items={formattedGrants}>
        <Item source="name" title="Name" to="/app/grant/{id}" />
        <Item
          source="funder.name"
          title="Funder"
          to="/app/funder/{funder.id}"
        />
        <Item source="requestAmount" title="Request Amount" />
      </List>
    );
  }
}

export default GrantsList;
