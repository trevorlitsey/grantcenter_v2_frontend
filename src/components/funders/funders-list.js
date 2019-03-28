import React, { PureComponent } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';

import List from '../shared/list';
import Item from '../shared/item';

import { funders } from '../../../seed';

class FundersList extends PureComponent {
  static propTypes = {
    funders: arrayOf(
      shape({
        id: string.isRequired,
        name: string.isRequired,
        missionFocus: string,
        annualGiving: number,
      })
    ).isRequired,
  };

  static defaultProps = {
    funders,
  };

  render() {
    const { funders } = this.props;

    const formattedFunders = funders.map(funder => ({
      ...funder,
      annualGiving: '$' + funder.annualGiving.toLocaleString(),
    }));

    return (
      <List items={formattedFunders}>
        <Item title="Name" source="name" to="/app/funder/{id}" />
        <Item title="Mission Focus" source="missionFocus" />
        <Item title="Annual Giving" source="annualGiving" />
      </List>
    );
  }
}

export default FundersList;
