import React, { PureComponent } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';

import List from '../shared/list';
import Item from '../shared/item';

class GrantsList extends PureComponent {
  static propTypes = {
    grants: arrayOf(
      shape({
        name: string.isRequired,
        funder: shape({
          id: string.isRequired,
          name: string.isRequired,
        }).isRequired,
        requestAmount: number.isRequired,
      })
    ).isRequired,
  };

  static defaultProps = {
    grants: [
      {
        id: '123',
        name: 'Summer 2018',
        funder: {
          id: '456',
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

    return (
      <List items={formattedGrants}>
        <Item title="Name" source="name" to="/app/grant/{id}" />
        <Item
          title="Funder"
          source="funder.name"
          to="/app/funder/{funder.id}"
        />
        <Item title="Request Amount" source="requestAmount" />
      </List>
    );
  }
}

export default GrantsList;
